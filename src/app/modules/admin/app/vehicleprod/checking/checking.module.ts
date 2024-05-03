import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckingComponent} from '@module/admin/app/vehicleprod/checking/checking.component'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {SignalrService} from '@core/signalr/signalr.service';
import { MatStepperModule ,MatStepper } from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
export const routes: Route[] = [
  {
      path     : '',
      component: CheckingComponent
  }
];
@NgModule({
  declarations: [CheckingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    NgxJsonViewerModule,
    MatStepperModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers:[MatStepper,SignalrService]
})
export class CheckingModule {
  
 }
