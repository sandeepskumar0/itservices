import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { Firestore,collection,addDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  constructor(private router:Router,private hero:HeroService,private firestore : Firestore) {}
    
      submit(){
        alert('Submitted Sucessfully')
        this.router.navigateByUrl('userdashboard')
      }
      addData(f:any)
      {
         const collectionInstance = collection(this.firestore,'subscribe');
        addDoc(collectionInstance,f.value).then(() =>{
          console.log('Data Saved Sucessfully')
        })
        .catch((err)=>{
          console.log(err); 
        })
      }
}

