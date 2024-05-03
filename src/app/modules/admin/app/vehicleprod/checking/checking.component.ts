import {map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import {CheckingService} from '@module/admin/app/vehicleprod/checking/checking.service';
import { SignalrService } from '@core/signalr/signalr.service';
import {uploadFileSteps} from '@core/models/uploadFileSteps';
import {SharedService} from '@core/shared/shared.service';
import { EstimateTotalVehicleProdResponse } from '@core/models/uploadFile';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css'],
})
export class CheckingComponent implements OnInit {
  @ViewChild('horizontalStepper') stepper: MatStepper;

  data:string[]=[];
  id:string;
  connectionId:string;
  refreshTime:number=3000;
  interval:any;
  fileDetail:any;
  showFileDetail:boolean;
  showInprocess:boolean;
  showDone:boolean;
  showSpinner:boolean;
  showLoading:boolean;
  dataSource:any[]=[];
  currentYear:number=0;
  columndefs : any[] = ['domexp'];
  constructor(
    private route: ActivatedRoute,
    private checkingService:CheckingService,
    private signalRService: SignalrService, 
    private sharedServices: SharedService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.showInprocess = false;
    this.showLoading = true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.signalRService.startConnection().then((connectionId:string)=>{
      this.connectionId = connectionId;
      this.interval = setInterval(()=>{
        this.showSpinner=true;
          this.signalRService.getConnection().invoke('UploadFileTracking',this.id, this.connectionId).catch(err => console.error(err));
      }, this.refreshTime);
    }).catch(err => {});
    
    this.signalRService.connection.on('UploadFileTracking', (data: any) => {
      try
      {
        let status = parseInt(data.statusId);
        this.stepper.reset();
        for(var step=0;step<status-1;step++){
          this.stepper.next();
        }
        if(status == uploadFileSteps.Done || data.isDone){
          if(status == uploadFileSteps.HeaderValidation ||status == uploadFileSteps.DataValidation)
          {
            this.showDone=true;
            this.checkingService.getTrackingData(this.id).subscribe((response)=>{
              this.data = response;
            });
          }else{
            this.checkingService.getUploadData(this.id).subscribe((response:EstimateTotalVehicleProdResponse)=>{
              this.currentYear = response.year;
              for(var i=0;i<9;i++){
                this.columndefs.push((this.currentYear+i).toString());
              }
              this.dataSource =response.vehicleProds;
            });
          }
          this.signalRService.getConnection().stop();
          clearInterval(this.interval);
          this.showSpinner=false;
          this.showLoading=false;
          this.showInprocess = false;
        }else{
          this.showInprocess = true;
          this.showLoading = true;
          this.showSpinner = true;
        }
      }catch{}finally{
        if(this.fileDetail == null)
          this.fileDetail = data;
      }
    });

  }
}
