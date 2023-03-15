import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-trainingpage',
  templateUrl: './trainingpage.component.html',
  styleUrls: ['./trainingpage.component.css']
})
export class TrainingpageComponent {
  constructor(private router:Router,private hero:HeroService) {}

  training= this.hero.giveInfo()
  
      
      gotoHere(id:any)
      {
        localStorage.setItem('id',id);
        this.router.navigate(['/homepage']);
        
    
  
      }
}
