import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { tech } from '../model/tech';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(private afs : AngularFirestore) { }

  // //add
  // additem(item:tech){
  //   item.id =this.afs.createId();
  //   return this.afs.collection('/tech').add(item);
  // }

  // //get all item
  // getAllitem(){
  //   return this.afs.collection('/item').snapshotChanges();

  // }

  // //delete

  // deleteitem(item: tech){
  //   return this.afs.doc('/tech/'+item.id).delete();
  // }

  // //update
  // updateitem(item : tech){
  //   this.deleteitem(item);
  //   this.additem(item);
  // }

}
