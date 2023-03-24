import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.css']
})
export class ProductspageComponent {
  constructor(private router:Router,private hero:HeroService) {}
  single:any
  gotohere(id:any)
  {
    localStorage.setItem('id1',id);
    // this.router.navigate(['/register']);
    this.router.navigate(['/cartpage']);
    
  }
      ngOnInit()
      {
        let id=Number(localStorage.getItem('id1'))
        console.log(id)
    
        if(id===1)
        {
          this.single=this.hero.giveData1()
        }
        else if(id===2)
        {
          this.single=this.hero.giveData2()
        }
        else if(id===3)
        {
          this.single=this.hero.giveData3()
        }
        else if(id===4)
        {
          this.single=this.hero.giveData4()
        }
        else if(id===5)
        {
          this.single=this.hero.giveData5()
        }
        else if(id===6)
        {
          this.single=this.hero.giveData6()
        }
        
        
      }
     
      simpleAlert(){
       
        Swal.fire({
          icon: 'warning',
          title: 'Sign up please. !!!',
          text: '',
          footer: '<a href="register">CONFIRM</a>',
          
        })
        

        // this.router.navigateByUrl('/register')
        
      }
    
}
