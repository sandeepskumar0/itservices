import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './component/aboutpage/aboutpage.component';
import { AdminComponent } from './adminpages/admin/admin.component';
import { AdminloginComponent } from './adminpages/adminlogin/adminlogin.component';
import { CarrersComponent } from './component/carrers/carrers.component';

import { ContactpageComponent } from './component/contactpage/contactpage.component';
import { EditFormComponent } from './component/edit-form/edit-form.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';

import { LandpageComponent } from './component/landpage/landpage.component';
import { LoginComponent } from './component/login/login.component';
import { OtherservicepageComponent } from './component/otherservicepage/otherservicepage.component';
import { PaymentpageComponent } from './component/paymentpage/paymentpage.component';
import { ProductspageComponent } from './component/productspage/productspage.component';
import { RegisterComponent } from './component/register/register.component';
import { ServicepageComponent } from './component/servicepage/servicepage.component';
import { TrainingpageComponent } from './component/trainingpage/trainingpage.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';

const routes: Routes = [
  
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  
  {path:'aboutpage',component:AboutpageComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'contactpage',component:ContactpageComponent},
  {path:'otherservicepage',component:OtherservicepageComponent},
  {path:'paymentpage',component:PaymentpageComponent},
  {path:'productspage',component:ProductspageComponent},
  {path:'servicepage',component:ServicepageComponent},
  {path:'trainingpage',component:TrainingpageComponent},
 
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'admin',component:AdminComponent},
  {path:'carrers',component:CarrersComponent},
  {path:'edit',component:EditFormComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'',component:LandpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
