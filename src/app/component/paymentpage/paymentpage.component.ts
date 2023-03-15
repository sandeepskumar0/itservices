import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent {
  constructor(private router:Router) {}
  
  buy(){
    alert('Your Booking Are Sucessfully Done ... You Will Recieve A Mail Shortly ! ThankYou')
    this.router.navigateByUrl('homepage')
  }

}
