import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpExtensions } from './http-extensions';
import { HttpExtensionsERP } from './http-extensions-erp';
import { AuthenticationService } from './authentication.service'

@Injectable({ providedIn: 'root' })
//Injectable()
export class ThroughputService {

  constructor(
    private httpExtensionsERP: HttpExtensionsERP,
    private httpExtensions: HttpExtensions,
    private auth: AuthenticationService
  ) { }

  // # # # # # # # # # # # # 
  // # # FAAS
  // # # # # # # # # # # # # 

  async getPlanThroughputB4(year:number) {
    return await this.httpExtensions.get(environment.hostAPI + "throughput/b4PlanByYear", {  year:year });
  }

  async getPlanThroughputCD1(year:number) {
    return await this.httpExtensions.get(environment.hostAPI + "throughput/cd1PlanByYear", { year:year });
  }

  async updatePlanThroughput(item:any) {
    return await this.httpExtensions.post(environment.hostAPI + "throughput/updatePlanThroughput", item);
  }

  async getThroughputB4(year:number) {
    return await this.httpExtensions.get(environment.hostAPI + "throughput/b4ThroughputByYear", {  year:year });
  }

  async getThroughputCD1(year:number) {
    return await this.httpExtensions.get(environment.hostAPI + "throughput/cd1ThroughputByYear", { year:year });
  }

  async updateThroughput(item:any) {
    return await this.httpExtensions.post(environment.hostAPI + "throughput/updateThroughput", item);
  }


  async getB4FuelConsumtion(year:number) {
    return await this.httpExtensions.get(environment.hostAPI + "throughput/B4FuelConsumtion", { year:year });
  }


  


  
}