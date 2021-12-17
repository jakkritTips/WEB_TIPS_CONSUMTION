import { Component, OnInit } from '@angular/core';
import { Helpers } from './../../helpers/helpers';

@Component({
  selector: 'app-throughput-record-b4',
  templateUrl: './throughput-record-b4.component.html',
  styleUrls: ['./throughput-record-b4.component.scss']
})
export class ThroughputRecordB4Component implements OnInit {

  public container_data: any[] = [];
  public container_data_temp: any[] = [];
  public loading:boolean;
  public table_height:number;

  constructor(private helper:Helpers) { }
  

  ngOnInit(): void {
    this.table_height = this.helper.getTableHeight(230);
  }

}
