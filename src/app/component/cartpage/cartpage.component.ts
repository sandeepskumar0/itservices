import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {
  constructor(private hero:HeroService,private router:Router) {}
  // data=this.hero.giveData()

  cart:any
    
      // ngOnInit()
      // {
      //   let id=Number(localStorage.getItem('id'))
      //   console.log()

      //   this.single=this.laptop.filter(e=> e.id==id)
       
      //   console.log("name",this.single)
      // }

      ngOnInit()
      {
        let id=(localStorage.getItem('id1'))
        let id2=(localStorage.getItem('id'))
        console.log(id)
    
        if(id==='1')
        {
          this.cart=this.hero.giveData1().filter(item =>item.id===id);
        }
        else if(id==='2')
        {
          this.cart=this.hero.giveData2().filter(item =>item.id===id);
        }
        else if(id==='3')
        {
          this.cart=this.hero.giveData3().filter(item =>item.id===id);
        }
        else if(id==='4')
        {
          this.cart=this.hero.giveData4().filter(item =>item.id===id);
        }
        else if(id==='5')
        {
          this.cart=this.hero.giveData5().filter(item =>item.id===id);
        }
        else if(id==='6')
        {
          this.cart=this.hero.giveData6().filter(item =>item.id===id);
        }
        
        
      }
      buy(){
        alert('before moving to next page you must be signup your account !!!!')
        this.router.navigateByUrl('/register')
      }
}
