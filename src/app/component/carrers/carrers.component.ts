import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.css']
})
export class CarrersComponent {

  AddForm!:FormGroup;
  constructor(private fb: FormBuilder,private auth:AuthService,private router :Router){


  this.AddForm=this.fb.group({
    Name:['',[Validators.required]],
    Email:['',[Validators.required]],
    Phone:['',[Validators.required]],
    Qualification:['',[Validators.required]],

  })
}
  add(){
    const details = this.AddForm.value;
    console.log(details);
    this.auth.add(details).then((res)=>{
      if(res){
        alert('Submit Successfully')
        this.AddForm.reset();
        this.router.navigate([''])
      }
      else{
        console.log('Data Not Added ')
      }
    })

  }
  
  }



