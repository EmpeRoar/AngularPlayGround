import { JbxSelectComponent } from './../components/jbx-select/jbx-select.component';
import { JbxTxtInputComponent } from './../components/jbx-txt-input/jbx-txt-input.component';
import { UtilsModule } from './../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { PgsidebarComponent } from './pgsidebar/pgsidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgformxComponent } from './ngformx/ngformx.component';
import { SaveactorComponent } from './saveactor/saveactor.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';



@NgModule({
  declarations: [
    CustomerComponent,
    PgsidebarComponent,
    DashboardComponent,
    NgswitchComponent,
    NgformxComponent,
    JbxTxtInputComponent,
    JbxSelectComponent,
    SaveactorComponent,
    TwowaybindingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UtilsModule,
    FormsModule
  ],
  exports: [
    CustomerComponent,
    DashboardComponent,
    NgswitchComponent,
    NgformxComponent,
    TwowaybindingComponent
  ]
})
export class PlayGroundModule { }
