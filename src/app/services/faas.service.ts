import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpExtensions } from './http-extensions';
import { HttpExtensionsERP } from './http-extensions-erp';
import { AuthenticationService } from '../services/authentication.service'

@Injectable({ providedIn: 'root' })
//Injectable()
export class FAASService {

  constructor(
    private httpExtensionsERP: HttpExtensionsERP,
    private httpExtensions: HttpExtensions,
    private auth: AuthenticationService
  ) { }

  // # # # # # # # # # # # # 
  // # # ERP
  // # # # # # # # # # # # # 

  async getCostCenterInDeparment() {
    return await this.httpExtensionsERP.get("xxx", { });
  }

  async getCostCenterOutDeparment() {
    return await this.httpExtensionsERP.get("xxx", { });
  }

  async getAsset() {
    return await this.httpExtensionsERP.get(environment.erpPageAssetCard, { });
  }

  

  // # # # # # # # # # # # # 
  // # # FAAS
  // # # # # # # # # # # # # 

  async getReasonCode() {
    return await this.httpExtensions.get(environment.hostAPI + "faas/getCostCenterOutDeparment", { });
  }

  async getStatusProcessAllByEmployee() {
    let user = this.auth.getUser();
    return await this.httpExtensions.get(environment.hostAPI + "faas/allStatusProcessByEmployee", { employee: user.employee });
  }

  async getBookingByEmployeeAndStatus(status:string) {
    let user = this.auth.getUser();
    return await this.httpExtensions.get(environment.hostAPI + "faas/getBookingByEmployeeAndStatus", { employee: user.employee,status:status });
  }

  async getBookingDetail(id:number) {
    return await this.httpExtensions.get(environment.hostAPI + "faas/getBookingDetail", { id: id });
  }

  async createBookTransferInternal() {
    return await this.httpExtensions.post(environment.hostAPI + "faas/createBookTransferInternal", { });
  }

  async createBookTransferExternal() {
    return await this.httpExtensions.post(environment.hostAPI + "faas/createBookTransferExternal", { });
  }

  async approveBookTransferInternal() {
    return await this.httpExtensions.post(environment.hostAPI + "faas/approveBookTransferInternal", { });
  }

  async approveBookTransferExternal() {
    return await this.httpExtensions.post(environment.hostAPI + "faas/approveBookTransferExternal", { });
  }

  async resentEmailBookApprove() {
    return await this.httpExtensions.post(environment.hostAPI + "faas/resentEmailBookApprove", { });
  }

  // # # # # # # # # # # # # 
  // # # FAAS FLOW
  // # # # # # # # # # # # #

  async templateFlow() {
    return await this.httpExtensions.post(environment.hostAPI + "flow/get_approve_flow", { });
  }

  async templateFlowCreate() {
    return await this.httpExtensions.post(environment.hostAPI + "flow/templateFlowCreate", { });
  }

  async templateFlowUpdate() {
    return await this.httpExtensions.post(environment.hostAPI + "flow/templateFlowUpdate", { });
  }

  async approveFlowSection() {
    return await this.httpExtensions.post(environment.hostAPI + "flow/approveFlowSection", { });
  }

  async approveFlowSectionCreate() {
    return await this.httpExtensions.post(environment.hostAPI + "flow/approveFlowSectionCreate", { });
  }

  async approveFlowSectionUpdate() {
    return await this.httpExtensions.post(environment.hostAPI + "flow/approveFlowSectionUpdate", { });
  }




}