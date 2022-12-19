import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { LocationsSitesComponent } from './locations-sites/locations-sites.component';
import { SystemComponent } from './system/system.component';
import { MessageComponent } from './message/message.component';
import { OrgDevicesComponent } from './org-devices/org-devices.component'
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { EditDevicesComponent } from './edit-devices/edit-devices.component';
import { DWLRComponent } from './Device-Details/dwlr/dwlr.component';
import { PHMCComponent } from './Device-Details/phmc/phmc.component';
import { DWLRDETAILSComponent } from './Device-Details/dwlr-details/dwlr-details.component';
import { DWLRMESSAGEComponent } from './Device-Details/dwlr-message/dwlr-message.component';
import { DWLRALERTSComponent } from './Device-Details/dwlr-alerts/dwlr-alerts.component';
import { DWLRREPORTSComponent } from './Device-Details/dwlr-reports/dwlr-reports.component';


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
      { path: 'message', component: MessageComponent },
      { path: 'devices', component: OrgDevicesComponent },
      { path: 'addDevice', component: AddDevicesComponent },
      { path: 'editDevice', component: EditDevicesComponent },
<<<<<<< HEAD
      { path: 'dwlrDetails', component: DWLRComponent },
      { path: 'phmcDetails', component: PHMCComponent }
=======
      {
        path: 'dwlrDetails', component: DWLRComponent, children: [
          { path: '', redirectTo: 'details', pathMatch: 'full' },
          { path: 'details', component: DWLRDETAILSComponent },
          { path: 'alerts', component: DWLRALERTSComponent },
          { path: 'message', component: DWLRMESSAGEComponent },
          { path: 'report', component: DWLRREPORTSComponent },

        ]
      },
      { path: 'phmcDetails', component: PHMCComponent },


>>>>>>> fa296b34f940cf4216d57ba5fedc53ee5db4e109
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
