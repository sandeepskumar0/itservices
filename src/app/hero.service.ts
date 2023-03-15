import { Injectable } from '@angular/core';
import{data,desktop,info, laptops, macbook, phone, printer, server,} from 'src/assets/data';
@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor() { }
  giveData()
  {
    return data
  }

  giveInfo()
  {
    return info
  }
  giveData1()
  {
    return laptops
  }
  giveData2()
  {
    return desktop
  }
  giveData3()
  {
    return macbook
  }
  giveData4()
  {
    return server
  }
  giveData5()
  {
    return phone
  }
  giveData6()
  {
    return printer
  }
  items = [];
}