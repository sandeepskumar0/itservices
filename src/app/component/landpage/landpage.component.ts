import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Firestore,collection,addDoc} from '@angular/fire/firestore';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent {
  email :  string = '';
  firstname : string = '';
  constructor(private auth :AuthService,private router:Router,private hero:HeroService,private firestore : Firestore){}

  
  submit(){
    alert('Submitted Sucessfully')
    this.router.navigateByUrl('')
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
