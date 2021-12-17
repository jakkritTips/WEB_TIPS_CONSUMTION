import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { HttpExtensions } from './http-extensions';
import { UserInfo } from '../models/autherize_model';
import { Response } from '../models/reponse_model';

@Injectable({ providedIn: 'root' })
//Injectable()
export class AuthenticationService {

  public socialUser: SocialUser;
  public code = ['VElQUy5DTyxMVEQ=', 'UE9SQU1B', 'S0FTRU0K', 'Q0hBV0VFV0FO', 'U1VSQUNIRVQ=', 'TkFUVEFHVU4=', 'SkFLS1JJVA==', 'VEhJTk5BS09O', 'TkFUVEhBUE9O', 'SVRESVZJU0lPTg==','SVRERVBBUlRNRU5U','SVRTVEFSVA=='];

  constructor(
    private socialAuthService: SocialAuthService,
    private httpExtensions: HttpExtensions
  ) { }

  isLogin() {
    if (sessionStorage.getItem(environment.auth) == null) {
      return false;
    } else {
      return true
    }
  }

  signCode(user: UserInfo) {
    const name = btoa(unescape(encodeURIComponent(user.name)));
    const employee = btoa(unescape(encodeURIComponent(user.employee)));
    const email = btoa(unescape(encodeURIComponent(user.email)));
    const position = btoa(unescape(encodeURIComponent(user.position)));
    const positionDesc = btoa(unescape(encodeURIComponent(user.position_desc)));
    const section = btoa(unescape(encodeURIComponent(user.section)));
    const sectionDesc = btoa(unescape(encodeURIComponent(user.section_desc)));
    const department = btoa(unescape(encodeURIComponent(user.department)));
    const departmentDesc = btoa(unescape(encodeURIComponent(user.department_desc)));
    const division = btoa(unescape(encodeURIComponent(user.division)));
    const divisionDesc = btoa(unescape(encodeURIComponent(user.division_desc)));
    const picture = btoa(unescape(encodeURIComponent(user.picture)));

    //console.log("signCode",user.token + this.code[0] + name + this.code[1] + employee + this.code[2] + email + this.code[3] + position + this.code[4] + positionDesc + this.code[5] + section + this.code[6] + sectionDesc + this.code[7] + department + this.code[8] + departmentDesc + this.code[9] + division + this.code[10] + divisionDesc+ this.code[11] + picture);
    console.log("divisionDesc",divisionDesc);

    sessionStorage.setItem(environment.auth, user.token + this.code[0] + name + this.code[1] + employee + this.code[2] + email + this.code[3] + position + this.code[4] + positionDesc + this.code[5] + section + this.code[6] + sectionDesc + this.code[7] + department + this.code[8] + departmentDesc + this.code[9] + division + this.code[10] + divisionDesc+ this.code[11] + picture);
  }

  getUser() {
    try {

      if (sessionStorage.getItem(environment.auth) != null) {
        const temp1 = sessionStorage.getItem(environment.auth).split(this.code[0]);
        const temp2 = temp1[1].split(this.code[1]);
        const temp3 = temp2[1].split(this.code[2]);
        const temp4 = temp3[1].split(this.code[3]);
        const temp5 = temp4[1].split(this.code[4]);
        const temp6 = temp5[1].split(this.code[5]);
        const temp7 = temp6[1].split(this.code[6]);
        const temp8 = temp7[1].split(this.code[7]);
        const temp9 = temp8[1].split(this.code[8]);
        const temp10 = temp9[1].split(this.code[9]);
        const temp11 = temp10[1].split(this.code[10]);
        const temp12 = temp11[1].split(this.code[11]);

        const user: UserInfo = {
          token: temp1[0],
          name: decodeURIComponent(escape(window.atob(temp2[0]))),
          employee: decodeURIComponent(escape(window.atob(temp3[0]))),
          email: decodeURIComponent(escape(window.atob(temp4[0]))),
          position: decodeURIComponent(escape(window.atob(temp5[0]))),
          position_desc: decodeURIComponent(escape(window.atob(temp6[0]))),
          section: decodeURIComponent(escape(window.atob(temp7[0]))),
          section_desc: decodeURIComponent(escape(window.atob(temp8[0]))),
          department: decodeURIComponent(escape(window.atob(temp9[0]))),
          department_desc: decodeURIComponent(escape(window.atob(temp10[0]))),
          division: decodeURIComponent(escape(window.atob(temp11[0]))),
          division_desc: decodeURIComponent(escape(window.atob(temp12[0]))),
          picture: decodeURIComponent(escape(window.atob(temp12[1])))
        };
        return user;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  }

  async loginWithGoogle() {
    //console.log(GoogleLoginProvider.PROVIDER_ID);
    return await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  async logOut() {
    sessionStorage.removeItem(environment.auth);
    return await this.socialAuthService.signOut();
  }

  async getEmployeeInfo(email) {
    return await this.httpExtensions.post("https://intranet.tips.co.th/TIPSAPI/api/autherize/infoByEmail", { email: email, system: 'tips' });
  }
}