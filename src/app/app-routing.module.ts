import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './component/aboutpage/aboutpage.component';
import { CartpageComponent } from './component/cartpage/cartpage.component';
import { ContactpageComponent } from './component/contactpage/contactpage.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';

import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { OtherservicepageComponent } from './component/otherservicepage/otherservicepage.component';
import { PaymentpageComponent } from './component/paymentpage/paymentpage.component';
import { ProductspageComponent } from './component/productspage/productspage.component';
import { RegisterComponent } from './component/register/register.component';
import { ServicepageComponent } from './component/servicepage/servicepage.component';
import { TrainingpageComponent } from './component/trainingpage/trainingpage.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
const routes: Routes = [
  
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HomepageComponent},
  {path:'aboutpage',component:AboutpageComponent},
  {path:'cartpage',component:CartpageComponent},
  {path:'contactpage',component:ContactpageComponent},
  {path:'otherservicepage',component:OtherservicepageComponent},
  {path:'paymentpage',component:PaymentpageComponent},
  {path:'productspage',component:ProductspageComponent},
  {path:'servicepage',component:ServicepageComponent},
  {path:'training',component:TrainingpageComponent},
  {path:'varify-email',component:VarifyEmailComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
