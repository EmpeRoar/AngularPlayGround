import { NgformxComponent } from './play-ground/ngformx/ngformx.component';
import { NgswitchComponent } from './play-ground/ngswitch/ngswitch.component';
import { PgsidebarComponent } from './play-ground/pgsidebar/pgsidebar.component';
import { CustomerComponent } from './play-ground/customer/customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './play-ground/dashboard/dashboard.component';
import { TwowaybindingComponent } from './play-ground/twowaybinding/twowaybinding.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'ng-switch',
    component: NgswitchComponent
  },
  {
    path: 'ng-form',
    component: NgformxComponent
  },{
    path: 'twoway-binding',
    component: TwowaybindingComponent
  },
  {
    path: 'sidebar',
    component: PgsidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
