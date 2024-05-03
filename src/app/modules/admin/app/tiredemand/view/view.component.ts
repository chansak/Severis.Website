import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstimateTotalVehicleProdResponse } from '@core/models/uploadFile';
import {CheckingService} from '@module/admin/app/vehicleprod/checking/checking.service';

@Component({
  selector: 'app-td-upload',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class TireDemandViewComponent implements OnInit {
    currentYear:number=0;
    columndefs : any[] = ['domexp'];
    id: any;
    dataSource:any[]=[];
    constructor(
    private checkingService:CheckingService,
    private route: ActivatedRoute) { }
    ngOnInit(): void
    {
        this.id = this.route.snapshot.paramMap.get('id');
        this.checkingService.getUploadData(this.id).subscribe((response:EstimateTotalVehicleProdResponse)=>{
            this.currentYear = response.year;
            for(var i=0;i<9;i++){
              this.columndefs.push((this.currentYear+i).toString());
            }
            this.dataSource =response.vehicleProds;
          });
    }

}
