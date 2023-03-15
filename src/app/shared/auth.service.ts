import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  //login
  login(email : string, password : string)
  {
    this.fireauth.signInWithEmailAndPassword(email,password).then(  res =>{
     localStorage.setItem('token','true');
     

      if(res.user?.emailVerified == true){
        this.router.navigate(['/paymentpage']);
     }
     else{
      this.router.navigate(['paymentpage']);
     }
    },err => {
      alert('something went wrong');
      this.router.navigate(['/login']);

    })
  }

  //register
  register(email : string, password : string)
  {
    this.fireauth.createUserWithEmailAndPassword(email,password).then( res =>{
      alert('Registration Sucessfull');
      this.router.navigate(['/login']);
      // this.sendEmailForVarification(res.user);
    },err =>{
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  //logout
//   logout()
//   {
//     this.fireauth.signOut().then( () =>{
//       localStorage.removeItem('token');
//       this.router.navigate(['/login']);

//     },err =>{
//       alert(err.message);
//     })
  
// }

//forgot pass
forgotpassword(email : string){
  this.fireauth.sendPasswordResetEmail(email).then(() =>{
    this.router.navigate(['/varify-email']);
  }, err => {
    alert("Something went wrong ");
  })
}


//varify-email
  // sendEmailForVarification(user : any){
  //   user.sendEmailForVarification().then((res : any) => {
  //   this.router.navigate(['/varify-email']);
  //   }, (err : any) => {
  //     alert('Something went wrong Not Able to send mail to registered email !!!')
  //   })
  // }

  //sign in google

  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res =>{
      this.router.navigate(['/cartpage']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }
}
