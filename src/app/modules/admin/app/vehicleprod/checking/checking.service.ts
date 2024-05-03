import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstimateTotalVehicleProdResponse, UploadedFile } from '@core/models/uploadFile';
@Injectable({
  providedIn: 'root'
})
export class CheckingService {

  constructor(private _httpClient: HttpClient) { }
  getTrackingData(id:string): Observable<any>
  {
      return this._httpClient.get<any>('api/VehicleProd/UploadFileJobTracking?uploadFileId=' + id);
  }
  getUploadData(id:string):Observable<EstimateTotalVehicleProdResponse>{
    return this._httpClient.get<EstimateTotalVehicleProdResponse>('api/VehicleProd/GetEstimateTotalVehicleProd?uploadFileId=' + id);
  }
}
