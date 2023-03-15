import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-otherservicepage',
  templateUrl: './otherservicepage.component.html',
  styleUrls: ['./otherservicepage.component.css']
})
export class OtherservicepageComponent {
  constructor(private hero:HeroService) {}
  data=this.hero.giveData()
  single:any
    
      ngOnInit()
      {
        let id=(localStorage.getItem('id'))
        console.log()
        this.single=this.data.filter(e=> e.id==id)
        console.log("name",this.single)
      }

}
