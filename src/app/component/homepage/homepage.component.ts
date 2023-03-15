import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Firestore,collection,addDoc} from '@angular/fire/firestore';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  email :  string = '';
  firstname : string = '';
  constructor(private auth :AuthService,private router:Router,private hero:HeroService,private firestore : Firestore){}

  // register()
  // {
  //   if(this.email == ''){
  //     alert('please enter email')
  //      return;
  //   }
  //   if(this.firstname == ''){
  //     alert('please enter password')
  //      return;
  //   }
       
  //   this.auth.register(this.email,this.firstname);
  //   this.email = '';
  //   this.firstname = '';
  // }
  submit(){
    alert('Submitted Sucessfully')
    this.router.navigateByUrl('homepage')
  }

  addData(f:any)
  {
     const collectionInstance = collection(this.firestore,'enquiry');
    addDoc(collectionInstance,f.value).then(() =>{
      console.log('Data Saved Sucessfully')
    })
    .catch((err)=>{
      console.log(err); 
    })
  }

}
