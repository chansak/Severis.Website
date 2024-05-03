import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadedFile } from '@core/models/uploadFile';
import { SharedService } from '@core/shared/shared.service';

@Component({
  selector: 'app-td-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class TireDemandSearchComponent implements OnInit {
  form: UntypedFormGroup;
  dataSource: UploadedFile[];
  columndefs : any[] = ['fileName','year','version','status','createdDate'];
  selectedYear:number;
  constructor(private _activatedRoute: ActivatedRoute,
    private _formBuilder: UntypedFormBuilder,
    private _router: Router,
    private sharedServices: SharedService) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      year     : ['', [Validators.required]],
      version  : ['0', Validators.required],
    });
  }
  search(){
    const formData = new FormData();
        formData.append("Year",this.form.value.year);
        formData.append("Version",this.form.value.version);
    this.sharedServices.searchFilesByYearAndVersion(formData).subscribe((response:UploadedFile[])=>{
      this.dataSource = response;
    });
  }
  onYearSelecting(event){
    let year = this.form.value.year;
    this.sharedServices.getLatestFileVersion(year).subscribe((version:number)=>{
      this.form.setValue({
          year:year,
          version:version
      });
    });
  }
}
