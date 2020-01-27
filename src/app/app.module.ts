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
import { ShowCustByAIdComponent } from './show-cust-by-aid/show-cust-by-aid.component';
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
    ContactUsComponent,
    ShowCustByAIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([

      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent },
      {path: 'agent-login', component: AgentLoginComponent},
      {path: 'clia-login', component: CliaLoginComponent},
      {path: 'customer-login', component: CustomerLoginComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'request-meet', component: RequestMeetComponent},

      {path: 'clia', component: CliaComponent , canActivate: [AuthService]},
      {path: 'agent', component: AgentComponent , canActivate: [AuthService]},
      {path: 'policy-holder', component: PolicyHolderComponent , canActivate: [AuthService]} ,
      {path: 'edit-clia-details', component: EditCliaDetailsComponent , canActivate: [AuthService]},
      {path: 'edit-agent-details/:agentId', component: EditAgentDetailsComponent ,  canActivate: [AuthService]},
      {path: 'edit-customer-details', component: EditCustomerDetailsComponent , canActivate: [AuthService]},
      {path: 'add-agent', component: AddAgentComponent , canActivate: [AuthService]},
      {path: 'add-customer/:agentId', component: AddCustomerComponent , canActivate: [AuthService]},
      {path: 'add-policy-details' , component: AddPolicyDetailsComponent},
      {path: 'show-agents', component: ShowAgentsComponent , canActivate: [AuthService]},
      {path: 'show-customers', component: ShowCustomersComponent , canActivate: [AuthService]},
      {path: 'remove-agent', component: RemoveAgentComponent , canActivate: [AuthService]},
      {path: 'add-new-plans', component: AddNewPlansComponent , canActivate: [AuthService]},
      {path: 'download-forms', component: DownloadFormsComponent},
      {path: 'show-policy-details', component: ShowPolicyDetailsComponent , canActivate: [AuthService]},
      {path: 'view-policy-status', component: ViewPolicyStatusComponent , canActivate: [AuthService]},
      {path: 'customer-update-contact-infomation', component: CustomerUpdateContactInformationComponent , canActivate: [AuthService]},
      {path: 'show-cust-by-aid/:agentId', component: ShowCustByAIdComponent , canActivate: [AuthService]}
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
