import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CliaComponent } from './clia/clia.component';
import { AgentComponent } from './agent/agent.component';
import { PolicyHolderComponent } from './policy-holder/policy-holder.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CliaLoginComponent } from './clia-login/clia-login.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddPolicyDetailsComponent } from './add-policy-details/add-policy-details.component';
import { EditCliaDetailsComponent } from './edit-clia-details/edit-clia-details.component';
import { EditAgentDetailsComponent } from './edit-agent-details/edit-agent-details.component';
import { EditCustomerDetailsComponent } from './edit-customer-details/edit-customer-details.component';
import { ShowAgentsComponent } from './show-agents/show-agents.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { RemoveAgentComponent } from './remove-agent/remove-agent.component';
import { AddNewPlansComponent } from './add-new-plans/add-new-plans.component';
import { DownloadFormsComponent } from './download-forms/download-forms.component';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import { RequestMeetComponent } from './request-meet/request-meet.component';
import { ViewPolicyStatusComponent } from './view-policy-status/view-policy-status.component';
import { CustomerUpdateContactInformationComponent } from './customer-update-contact-information/customer-update-contact-information.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CliaComponent,
    AgentComponent,
    PolicyHolderComponent,
    CliaLoginComponent,
    AgentLoginComponent,
    CustomerLoginComponent,
    AddCustomerComponent,
    AddAgentComponent,
    AddPolicyDetailsComponent,
    EditCliaDetailsComponent,
    EditAgentDetailsComponent,
    EditCustomerDetailsComponent,
    ShowAgentsComponent,
    ShowCustomersComponent,
    RemoveAgentComponent,
    AddNewPlansComponent,
    DownloadFormsComponent,
    ShowPolicyDetailsComponent,
    RequestMeetComponent,
    ViewPolicyStatusComponent,
    CustomerUpdateContactInformationComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'clia', component: CliaComponent , canActivate: [AuthService]},
      {path: 'agent', component: AgentComponent , canActivate: [AuthService]},
      {path: 'policy-holder', component: PolicyHolderComponent},
      {path: 'agent-login', component: AgentLoginComponent},
      {path: 'clia-login', component: CliaLoginComponent},
      {path: 'customer-login', component: CustomerLoginComponent},
      {path: 'edit-clia-details', component: EditCliaDetailsComponent},
      {path: 'edit-agent-details/:agentId', component: EditAgentDetailsComponent},
      {path: 'edit-customer-details', component: EditCustomerDetailsComponent},
      {path: 'add-agent', component: AddAgentComponent},
      {path: 'add-customer', component: AddCustomerComponent},
      {path: 'add-policy-details' , component: AddPolicyDetailsComponent},
      {path: 'request-meet', component: RequestMeetComponent},
      {path: 'show-agents', component: ShowAgentsComponent},
      {path: 'show-customers', component: ShowCustomersComponent},
      {path: 'remove-agent', component: RemoveAgentComponent},
      {path: 'add-new-plans', component: AddNewPlansComponent},
      {path: 'download-forms', component: DownloadFormsComponent},
      {path: 'show-policy-details', component: ShowPolicyDetailsComponent},
      {path: 'view-policy-status', component: ViewPolicyStatusComponent},
      {path: 'customer-update-contact-infomation', component: CustomerUpdateContactInformationComponent},
      {path: 'contact-us', component: ContactUsComponent}
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
