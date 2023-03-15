import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email :  string = '';
   constructor(private auth : AuthService){}
  
   
forgotpassword()
{
  this.auth.forgotpassword(this.email);
  this.email = '';
}
}
