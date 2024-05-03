import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'app/shared/shared.module';
import {TireDemandViewComponent} from '@module/admin/app/tiredemand/view/view.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseAlertService } from '@fuse/components/alert';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
export const routes: Route[] = [
  {
      path     : '',
      component:TireDemandViewComponent
  }
];

@NgModule({
  declarations: [TireDemandViewComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatToolbarModule,
    FuseAlertModule,
    MatTableModule,
    MatCardModule
  ],
  providers:[FuseAlertService]
})
export class TireDemandViewModule { }
