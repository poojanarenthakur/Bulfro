import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { LocationsSitesComponent } from './locations-sites/locations-sites.component';
import { SystemComponent } from './system/system.component';
import { MessageComponent } from './message/message.component';
import{OrgDevicesComponent}from './org-devices/org-devices.component'



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'org', pathMatch: 'full' },
      { path: 'org', component: OrganisationComponent },
      { path: 'alert', component: AlertComponent },
      { path: 'sites', component: LocationsSitesComponent },
      { path: 'system', component: SystemComponent },
      {path:'message', component:MessageComponent},
      {path: 'devices' , component:OrgDevicesComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
