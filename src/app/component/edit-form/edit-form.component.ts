import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  // addForm!:FormGroup;

  // constructor(private fb: FormBuilder,private auth:AuthService,private router :Router){


  //   this.addForm=this.fb.group({
  //     Name:['',[Validators.required]],
  //     Email:['',[Validators.required]],
  //     Phone:['',[Validators.required]],
  //     Qualification:['',[Validators.required]],
  //   })

  // }
  // ngOnInit(){
  //    this.getDatById();
  // }
  // getDatById(){
  //  let id = localStorage.getItem('doc_id')
  //  this.auth.getAddById(id).then((data : any) => {
  //   this.addForm =  this.fb.group({
  //     Name:data.Name,
  //     Email:data.Email,
  //     Phone:data.Phone,
  //     Qualification:data.Qualification

  //   })
  //  })
  // }
  
  // update(){
  //   const details = this.addForm.value;
  //   let id =localStorage.getItem('doc_id')
  //   this.auth.update(id,details).then((res)=>{
  //   console.log(res)
  //   alert('data added sucessfully')
  //  })


  // }

}
