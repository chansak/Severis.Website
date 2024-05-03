import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { HubConnectionState } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  connection: signalR.HubConnection;
  connectionId:string;
  refreshTime:number=5000;
  interval:any;
  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('/signalr/notify',{
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect([100])
      .build();
  }
  getConnection(){
    return this.connection;
  }
  startConnection() {
    console.log(this.connection.state);
    if(this.connection.state == HubConnectionState.Disconnected)
    {
      return new Promise((resolve, reject) => {
        this.connection.start()
          .then(() => {
            console.log("connection established");
            this.getConnectionId().then((connectionId)=>{
              console.log(connectionId);
              return resolve(this.connectionId);
            });
          })
          .catch((err: any) => {
            console.log("error occured" + err);
            reject(err);
          });
      });
    }else{
      return new Promise((resolve, reject) => {
        this.getConnectionId().then((connectionId)=>{
          console.log(connectionId);
          return resolve(this.connectionId);
        })
        .catch((err: any) => {
          console.log("error occured" + err);
          reject(err);
        });
      });
    }
  }
  stopConnection() {
    console.log('stop interval');
    this.connection.stop();
  }
  getConnectionId():Promise<string> {
    return new Promise((resolve, reject) => {
    this.connection.invoke('getconnectionid')
    .then((connectionId:string) => {
        this.connectionId = connectionId;
        return resolve(connectionId);
      });
    });
  } 
}
