import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.css']
})
export class ServicepageComponent {
  constructor(private router:Router,private hero:HeroService) {}

  contact= this.hero.giveData()
  
      
      gotoHere(id:any)
      {
        localStorage.setItem('id1',id);
        this.router.navigate(['/cartpage']);
        this.router.navigate(['/productspage']);
       
    
  
      }

      gotohere(id:any)
      {
        localStorage.setItem('id',id);
        this.router.navigate(['/otherservicepage']);
        
    
  
      }
}
