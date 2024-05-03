import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Item, Items } from '@module/admin/app/vehicleprod/upload/item.types';
import { FuseAlertService } from '@fuse/components/alert';
import {UploadService} from '@module/admin/app/vehicleprod/upload/upload.service';
import { UploadFileInfo } from './upload.fileinfo';
import { Guid } from 'guid-typescript';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class UploadComponent implements OnInit
{
    horizontalStepperForm: UntypedFormGroup;
    // fileName :string;
    files:Item[];
    refFiles:Item[];
    clicked:boolean;
    selectedYear:string;
    _version: number;
    //uploadFileInfo:UploadFileInfo;
    constructor(
        private router:Router,
        private _formBuilder: UntypedFormBuilder,
        private _fuseAlertService: FuseAlertService,
        private _uploadService: UploadService)
    {

    }
    ngOnInit(): void
    {
        this.files = [];
        this.refFiles = [];
        // Horizontal stepper form
        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                year   : ['', Validators.required],
                version : ['', Validators.required],
            }),
            step2: this._formBuilder.group({
                files: ['', Validators.required],
            }),
            step3: this._formBuilder.group({
                refFiles: [''],
            })
        });
    }
    onFileSelected(event) {
        this.files = [];
        if (this.files) {
            Array.from<any>(event.target.files).forEach(file => {
                switch(file.type){
                    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':{
                        break;
                    }
                }
                this.files.push({
                    name: file.name,
                    size:file.size,
                    type:'XLS',
                    blobFile:file
                });
            });
        }
    }
    onRefFileSelected(event) {
        this.refFiles = [];
        if (this.refFiles) {
            Array.from<any>(event.target.files).forEach(file => {
                switch(file.type){
                    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':{
                        break;
                    }
                }
                this.refFiles.push({
                    name: file.name,
                    size:file.size,
                    type:'XLS',
                    blobFile:file
                });
            });
            console.log(this.refFiles);
        }
    }
    uploaEstimateTotalVehicleProduction():void{
        this.upload();
    }
    dismiss(name: string): void
    {
        this._fuseAlertService.dismiss(name);
    }
    show(name: string): void
    {
        this._fuseAlertService.show(name);
    }
    upload():void{
        this.clicked = true;
        let root = this;
        let newFileName = Guid.create();
        const formData = new FormData();
        formData.append("Year",this.horizontalStepperForm.value.step1.year);
        formData.append("Version",this.horizontalStepperForm.value.step1.version);
        formData.append("NewFileName",newFileName.toString());
        Array.from<any>(this.files).forEach(file => {
            formData.append("files",file.blobFile,file.name);
        });
        if(this.refFiles.length>0){
            Array.from<any>(this.refFiles).forEach(file => {
                formData.append("files",file.blobFile,file.name);
            });
        }
        this._uploadService.upload(formData).subscribe(
            (event: any) => {
                this.router.navigateByUrl('/app/vehicleprod/checking/'+ newFileName);
            });
    }
    onYearSelecting(event){
        let year = this.horizontalStepperForm.value.step1.year;
        this._uploadService.getNextFileVersion(year).subscribe((version)=>{
            //this.horizontalStepperForm.controls['step1'].value.controls['version'].setValue(version);
            //this.horizontalStepperForm.get('step1').value.version = version;
            //.setValue(version);
            this.horizontalStepperForm.controls['step1'].setValue({
                year:year,
                version:version
            });
        });
    }
}
