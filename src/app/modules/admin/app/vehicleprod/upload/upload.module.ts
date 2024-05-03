import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'app/shared/shared.module';
import {UploadComponent} from '@module/admin/app/vehicleprod/upload/upload.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseAlertService } from '@fuse/components/alert';
export const routes: Route[] = [
  {
      path     : '',
      component: UploadComponent,
  }
];
@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatToolbarModule,
    FuseAlertModule,
    SharedModule
  ],
  providers:[FuseAlertService]
})
export class UploadModule { }
