import { Component, OnInit } from '@angular/core';
import { Helpers } from './../../helpers/helpers';

@Component({
  selector: 'app-throughput-plan-b4',
  templateUrl: './throughput-plan-b4.component.html',
  styleUrls: ['./throughput-plan-b4.component.scss']
})
export class ThroughputPlanB4Component implements OnInit {

  public years:any[] = [];
  public select_year:string = "";
  public table_height:number;
  public container_data: any[] = [];
  public container_data_temp: any[] = [];
  public loading:boolean;
  

  constructor(private helpers:Helpers) { }
  
  ngOnInit(): void {
    this.years = this.helpers.getYearDropdown();
    this.table_height = this.helpers.getTableHeight(230);
  }

  searchByYear(year:number){
    this.select_year = year.toString();
  }

}
