import { Component } from '@angular/core';
import { tech } from 'src/app/model/tech';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

//      itemList : tech[] = [];
//      itemObj : tech = {
//       id : '',
//      name: '',
//      description: '',
//      image: '',
//      head: '',

//      };
//      id :string = '';
//      name: string= '';
//      description: string= '';

//      image: string= '';
//      head:string= '';

// constructor(private auth :AuthService,private data : DataService){}
// ngOnInit(): void
// {
//    this.getAllitem();
// }

// // register(){
// //   this.auth.logout();
// // }

// getAllitem(){
//   this.data.getAllitem().subscribe(res => {
//     this.itemList = res.map((e :any ) => {
//     const data = e.payload.doc.data();
//     data.id =  e.payload.doc.id;
//     return data;
//     })
//   },err =>{
//     alert('error while fetching data');

//   })
// }
// resetForm(){

//     this.id = '';
//     this.name= '';
//     this.description= '';
//     this.image= '';
//     this.head= '';


    
// }

// additem()
//  {
//    if(this.name == '' || this.description == '' || this.image == '' || this.head == '' )
//      {
//        alert('fill all inputs');
//        return;
//    }
//    this.itemObj.id = '';
//    this.itemObj.name = this.name;
//    this.itemObj.description=this.description;
//    this.itemObj.image=this.image;
//    this.itemObj.head=this.head;

//    this.data.additem(this.itemObj);
//    this.resetForm();

// }
// updateitem(){

// }
// deleteitem(item : tech){
//   if(window.confirm('Are you sure you want to delete'+item.name))
//    this.data.deleteitem(item);

// }

}

