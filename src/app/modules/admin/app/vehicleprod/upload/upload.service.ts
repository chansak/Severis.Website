import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import {UploadFileInfo} from '@module/admin/app/vehicleprod/upload/upload.fileinfo';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private _version: ReplaySubject<number> = new ReplaySubject<number>(1);
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(formData:FormData):Observable<any> {
      return this.http.post<any>('/api/VehicleProd/UploadFiles',formData);
  }
  getNextFileVersion(year:string): Observable<number>
    {
        return this.http.get<number>('api/VehicleProd/GetNextFileVersion?year='+year);
    }
}
