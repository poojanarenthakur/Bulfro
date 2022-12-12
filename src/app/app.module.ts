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
    OrgUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
