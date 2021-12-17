import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
//Injectable()
export class Helpers {

  constructor(
  ) { }

  // # # # # # # # # # # # # 
  // # # ERP
  // # # # # # # # # # # # # 

  getTableHeight(margin:number) {
    return window.innerHeight - margin;
  }

  getYearDropdown(){
    let years = [];
    let year_current = new Date().getFullYear();
    for(var i = year_current; i >= 2019; i--){
      years.push(i);
    }

    return years;

  }
}