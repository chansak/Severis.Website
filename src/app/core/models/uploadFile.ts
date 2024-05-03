import { Version } from "@fuse/version";

export interface UploadedFile {
    uploadFileId:string;
    fileName:string;
    statusId:number;
    year:number;
    version:number;
    statusText:string;
    isDone:boolean;
    isActive:boolean;
    createdDate:Date;
}
export interface VehicleProductionResponse{
    domexp:string;
    year0 :number
    year1 :number
    year2 :number
    year3 :number
    year4 :number
    year5 :number
    year6 :number
    year7 :number
    year8 :number
    year9 :number
}
export interface EstimateTotalVehicleProdResponse{
    uploadFileId:string;
    year:number;
    version:number;
    vehicleProds:VehicleProductionResponse[];
}
  