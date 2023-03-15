import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './component/register/register.component';
import { AboutpageComponent } from './component/aboutpage/aboutpage.component';
import { CartpageComponent } from './component/cartpage/cartpage.component';
import { ContactpageComponent } from './component/contactpage/contactpage.component';
import { OtherservicepageComponent } from './component/otherservicepage/otherservicepage.component';
import { PaymentpageComponent } from './component/paymentpage/paymentpage.component';
import { ProductspageComponent } from './component/productspage/productspage.component';
import { ServicepageComponent } from './component/servicepage/servicepage.component';
import { TrainingpageComponent } from './component/trainingpage/trainingpage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import{AngularFireModule} from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
// import { FirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent,
    AboutpageComponent,
    CartpageComponent,
    ContactpageComponent,
    OtherservicepageComponent,
    PaymentpageComponent,
    ProductspageComponent,
    ServicepageComponent,
    TrainingpageComponent,
    NavbarComponent,
    FooterComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
   
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth (() => getAuth()),
    provideFirestore(() => getFirestore()),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
