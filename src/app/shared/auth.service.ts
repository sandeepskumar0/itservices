import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Details } from '../interface/details';
import { Observable } from 'rxjs';
import { Partner } from '../interface/detail';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private fs: Firestore
  ) {}

  //login
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');

        if (res.user?.emailVerified == true) {
          this.router.navigate(['/userdashboard']);
        } else {
          this.router.navigate(['userdashboard']);
        }
      },
      (err) => {
        alert('something went wrong');
        this.router.navigate(['/login']);
      }
    );
  }

  //register
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Registration Sucessfull');
        this.router.navigate(['/login']);
        // this.sendEmailForVarification(res.user);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
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
  forgotpassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(
      () => {
        this.router.navigate(['/varify-email']);
      },
      (err) => {
        alert('Something went wrong ');
      }
    );
  }

  //sign in google

  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider()).then(
      (res) => {
        this.router.navigate(['/cartpage']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  //add
  add(details: Details) {
    details.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'carrers',), details);
  }
  //read
  get(): Observable<Details[]> {
    let detailsRef = collection(this.fs, 'carrers');
    return collectionData(detailsRef, { idField: 'doc_id' }) as Observable<
      Details[]
    >;
  }

  // get a add details by id
  // async getAddById(id: any): Promise<any> {
  //   let docRef = doc(this.fs, 'Details', id);
  //   try {
  //     const docSDnap = await getDoc(docRef);

  //     if (docSDnap.exists()) {
  //       return docSDnap.data();
  //     } else {
  //       console.log('Document is  Missing');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // update(id: any, details: any) {
  //   let docRef = doc(this.fs, 'carrers', id);
  //   return updateDoc(docRef, details);
  // }




  delete(id:any){
    let docRef = doc(this.fs, 'carrers', id);
    return deleteDoc(docRef)

  }

  adminlogin(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/admin']);
    
      },
      (err) => {
        alert('something went wrong');
        this.router.navigate(['/adminlogin']);
      }
    );
  }

    //adminlogout
    logout()
    {
      this.fireauth.signOut().then( () =>{
        localStorage.removeItem('token');
        this.router.navigate(['/adminlogin']);

      },err =>{
        alert(err.message);
      })

  }

//bookingprdt
  //add partner
addp(detail: Partner) {
  detail.id1 = doc(collection(this.fs, 'id1')).id;
  return addDoc(collection(this.fs, 'bookprdt',), detail);
}
//read
getp(): Observable<Partner[]> {
  let detailRef = collection(this.fs, 'bookprdt');
  return collectionData(detailRef, { idField: 'doc_id' }) as Observable<
    Partner[]
  >;
}
deletep(id:any){
  let docRef = doc(this.fs, 'bookprdt', id);
  return deleteDoc(docRef)

}
}
