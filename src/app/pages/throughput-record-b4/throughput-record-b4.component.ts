import { Component, OnInit } from '@angular/core';
import { Helpers } from './../../helpers/helpers';
import { ThroughputService } from "./../../services/throughput.service";
declare const ui: any;
@Component({
  selector: 'app-throughput-record-b4',
  templateUrl: './throughput-record-b4.component.html',
  styleUrls: ['./throughput-record-b4.component.scss']
})
export class ThroughputRecordB4Component implements OnInit {

  public years:number[] = [];
  public row_status:any[] = [];
  public select_year:string = "";
  public table_height:number;
  public plan_data: any[] = [];
  public plan_data_temp: any[] = [];
  public loading:boolean;
  

  constructor(private helpers:Helpers,private throughputService:ThroughputService) { }
  
  ngOnInit(): void {
    this.years = this.helpers.getYearDropdown();
    this.table_height = this.helpers.getTableHeight(230);
    this.searchByYear(new Date().getFullYear());
  }

  async searchByYear(year:number){
    const res:any = await this.throughputService.getThroughputB4(year);
    if(res.result.ok){
      this.plan_data_temp = res.result.data.plan;
      this.plan_data = res.result.data.plan;
    }
    console.log(res);
  }

  async updatePlan(item){
    item.saving = true;
    console.log("update",item);
    const res:any = await this.throughputService.updateThroughput(item);
    if(res.result.ok){
      ui.noti.s("ทำการบันทึกเรียบร้อย");
      item.saving = false;
    }else{
      item.saving = false;
    }
  }

}
