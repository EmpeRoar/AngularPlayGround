import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgSelectComponent } from './pg-select/pg-select.component';



@NgModule({
  declarations: [PgSelectComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PgSelectComponent
  ]
})
export class UtilsModule { }
