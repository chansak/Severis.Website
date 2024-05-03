import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {HubConnectionBuilder,HubConnection} from '@microsoft/signalr';

import { AppComponent } from './app.component';
import {SignalrService} from '@core/signalr/signalr.service';

import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { appRoutes } from 'app/app.routing';
import { BrandComponent } from './modules/admin/setting/master/vehicle/brand/brand.component';
import { ModelComponent } from './modules/admin/setting/master/vehicle/model/model.component';
import { FuseAlertModule } from '@fuse/components/alert';
const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,routerConfig),
    FuseModule,
    FuseConfigModule.forRoot(appConfig),
    FuseMockApiModule.forRoot(mockApiServices),
    FuseAlertModule,
    CoreModule,
    LayoutModule,

  ],
  declarations: [
    AppComponent,
    BrandComponent,
    ModelComponent,
  ],
  providers:[
    SignalrService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/