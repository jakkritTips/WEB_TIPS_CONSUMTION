import { Component, OnInit } from '@angular/core';
import { Helpers } from './../../helpers/helpers';
import { ThroughputService } from "./../../services/throughput.service";
declare const ui: any;
@Component({
  selector: 'app-fuel-b4-purchase',
  templateUrl: './fuel-b4-purchase.component.html',
  styleUrls: ['./fuel-b4-purchase.component.scss']
})
export class FuelB4PurchaseComponent implements OnInit {

  public years:number[] = [];
  public row_status:any[] = [];
  public select_year:number = 0;
  public table_height:number;
  public plan_data: any[] = [];
  public plan_data_temp: any[] = [];
  public loading:boolean;
  

  constructor(private helpers:Helpers,private throughputService:ThroughputService) { }
  
  ngOnInit(): void {
    this.years = this.helpers.getYearDropdown();
    this.table_height = this.helpers.getTableHeight(230);
    this.select_year = new Date().getFullYear();
    this.searchByYear(this.select_year);
  }

  async searchByYear(year:number){
    const res:any = await this.throughputService.getB4FuelConsumtion(year);
    this.select_year = year;
    if(res.result.ok){
      this.plan_data_temp = res.result.data.month;
      this.plan_data = res.result.data.month;
    }
    console.log(res);
  }

}
