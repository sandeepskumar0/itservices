import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router,ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-trainingpage',
  templateUrl: './trainingpage.component.html',
  styleUrls: ['./trainingpage.component.css']
})
export class TrainingpageComponent {
   email :  string = '';
   firstname : string = '';
  constructor(private router:Router,private hero:HeroService,private firestore : Firestore) {}

  training= this.hero.giveInfo()
  
      
      gotoHere(id:any)
      {
        localStorage.setItem('id',id);
        this.router.navigate(['']);
        
    
  
      }

      
    
      submit(){
        alert('Submitted Sucessfully')
        this.router.navigateByUrl('')
      }
      addData(f:any)
      {
         const collectionInstance = collection(this.firestore,'trainingenquiry');
        addDoc(collectionInstance,f.value).then(() =>{
          console.log('Data Saved Sucessfully')
        })
        .catch((err)=>{
          console.log(err); 
        })
      }
}
