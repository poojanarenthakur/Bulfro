import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { AlertComponent } from './alert/alert.component';
import { LocationsSitesComponent } from './locations-sites/locations-sites.component';
import { SystemComponent } from './system/system.component';
import { MessageComponent } from './message/message.component';
import { OrgDevicesComponent } from './org-devices/org-devices.component';
import { OrgUsersComponent } from './org-users/org-users.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { EditDevicesComponent } from './edit-devices/edit-devices.component';
import { DWLRComponent } from './Device-Details/dwlr/dwlr.component';
import { PHMCComponent } from './Device-Details/phmc/phmc.component';
import { DWLRDETAILSComponent } from './Device-Details/dwlr-details/dwlr-details.component';
import { DWLRMESSAGEComponent } from './Device-Details/dwlr-message/dwlr-message.component';
import { DWLRALERTSComponent } from './Device-Details/dwlr-alerts/dwlr-alerts.component';
import { DWLRREPORTSComponent } from './Device-Details/dwlr-reports/dwlr-reports.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    OrganisationComponent,
    AlertComponent,
    LocationsSitesComponent,
    SystemComponent,
    MessageComponent,
    OrgDevicesComponent,
    OrgUsersComponent,

    AddDevicesComponent,
    EditDevicesComponent,
    DWLRComponent,
    PHMCComponent,
    DWLRDETAILSComponent,
    DWLRMESSAGEComponent,
    DWLRALERTSComponent,
    DWLRREPORTSComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
