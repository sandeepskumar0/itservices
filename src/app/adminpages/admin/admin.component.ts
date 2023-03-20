import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Details } from 'src/app/interface/details';
import { Partner } from 'src/app/interface/detail';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  details!:Details[];
  detail!:Partner[];
  constructor(private router :Router, private auth:AuthService){}

  ngOnInit(){
    this.get();
    this.getp();
  }

//collection fetch and intilize
get(){
  this.auth.get().subscribe((data:Details[])=>{
  console.log(data)
  this.details=data;
  })
}
add(){
  this.router.navigate(['/booking']);

}




delete(id:any){
  let okConfirm =confirm("Are you sure ?")
  if(okConfirm){
    this.auth.delete(id)
  }
  alert('delete');
}

logout(){
  alert('do you want to logout ?')
  this.router.navigate(['/adminlogin'])
}

getp(){
  this.auth.getp().subscribe((data:Partner[])=>{
  console.log(data)
  this.detail=data;
  })
  }
  addp(){
  this.router.navigate(['/partner']);
  
  }
  
  
  
  
  deletep(id1:any){
  let okConfirm =confirm("Are you sure ?")
  if(okConfirm){
    this.auth.delete(id1)
  
  }
  alert('delete');
  }
  
 

}
