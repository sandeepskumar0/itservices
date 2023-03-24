import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './component/register/register.component';
import { AboutpageComponent } from './component/aboutpage/aboutpage.component';
import { ContactpageComponent } from './component/contactpage/contactpage.component';
import { OtherservicepageComponent } from './component/otherservicepage/otherservicepage.component';
import { PaymentpageComponent } from './component/paymentpage/paymentpage.component';
import { ProductspageComponent } from './component/productspage/productspage.component';
import { ServicepageComponent } from './component/servicepage/servicepage.component';
import { TrainingpageComponent } from './component/trainingpage/trainingpage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import{AngularFireModule} from '@angular/fire/compat';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AdminComponent } from './adminpages/admin/admin.component';
import { CarrersComponent } from './component/carrers/carrers.component';
import { FirestoreModule } from '@angular/fire/firestore';
import { EditFormComponent } from './component/edit-form/edit-form.component';
import { AdminloginComponent } from './adminpages/adminlogin/adminlogin.component';
import { LandpageComponent } from './component/landpage/landpage.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutpageComponent,
    ContactpageComponent,
    OtherservicepageComponent,
    PaymentpageComponent,
    ProductspageComponent,
    ServicepageComponent,
    TrainingpageComponent,
    NavbarComponent,
    FooterComponent,
    ForgotPasswordComponent,
    AdminComponent,
     CarrersComponent,
     EditFormComponent,
     AdminloginComponent,
     LandpageComponent,
     UserdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth (() => getAuth()),
    provideFirestore(() => getFirestore()),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
