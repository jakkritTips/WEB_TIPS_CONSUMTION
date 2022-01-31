import { Component, OnInit } from '@angular/core';
import { Helpers } from './../../helpers/helpers';
import { ThroughputService } from "./../../services/throughput.service";

@Component({
  selector: 'app-fuel-cd1-purchase',
  templateUrl: './fuel-cd1-purchase.component.html',
  styleUrls: ['./fuel-cd1-purchase.component.scss']
})
export class FuelCD1PurchaseComponent implements OnInit {

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
    this.loading = true;
    const res:any = await this.throughputService.getCD1FuelConsumtion(year);
    this.select_year = year;
    if(res.result.ok){
      this.plan_data_temp = res.result.data.month;
      this.plan_data = res.result.data.month;
    }
    this.loading = false;
  }

}
