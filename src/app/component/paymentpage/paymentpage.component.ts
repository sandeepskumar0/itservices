import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent {
 
  
 
  ThisForm!:FormGroup;
  constructor(private fb: FormBuilder,private auth:AuthService,private router :Router){


  this.ThisForm=this.fb.group({
    Name:['',[Validators.required]],
    Email:['',[Validators.required]],
    Phone:['',[Validators.required]],
    company:['',[Validators.required]],
    city:['',[Validators.required]],


  })
}
  addp(){
    const detail = this.ThisForm.value;
    console.log(detail);
    this.auth.addp(detail).then((res)=>{
      if(res){
        alert('Submit Successfully')
        this.ThisForm.reset();
        this.router.navigate(['/'])
      }
      else{
        console.log('Data Not Added ')
      }
    })

  }

  // add(){
  //   alert('Your Booking Are Sucessfully Done ... You Will Recieve A Mail Shortly ! ThankYou')
  //   this.router.navigate(['/homepage'])
  // }

}
