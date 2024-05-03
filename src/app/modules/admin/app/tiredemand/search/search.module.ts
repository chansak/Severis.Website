import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import {TireDemandSearchComponent} from '@module/admin/app/tiredemand/search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from '@layout/common/search/search.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export const routes: Route[] = [
  {
      path     : '',
      component:TireDemandSearchComponent
  }
];


@NgModule({
  declarations: [TireDemandSearchComponent],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    SearchModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class TireDemandSearchModule { }
