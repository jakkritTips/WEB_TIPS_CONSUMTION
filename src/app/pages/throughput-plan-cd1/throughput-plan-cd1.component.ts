import { Component, OnInit } from '@angular/core';
import { Helpers } from './../../helpers/helpers';
import { ThroughputService } from "./../../services/throughput.service";
declare const ui: any;

@Component({
  selector: 'app-throughput-plan-cd1',
  templateUrl: './throughput-plan-cd1.component.html',
  styleUrls: ['./throughput-plan-cd1.component.scss']
})
export class ThroughputPlanCD1Component implements OnInit {

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
    this.select_year = year;
    const res:any = await this.throughputService.getPlanThroughputCD1(year);
    if(res.result.ok){
      this.plan_data_temp = res.result.data.plan;
      this.plan_data = res.result.data.plan;
    }
    console.log(res);
  }

  async updatePlan(item){
    item.saving = true;
    console.log("update",item);
    const res:any = await this.throughputService.updatePlanThroughput(item);
    if(res.result.ok){
      ui.noti.s("ทำการบันทึกเรียบร้อย");
      item.saving = false;
    }else{
      item.saving = false;
    }
  }
}
