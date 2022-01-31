import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { UserInfo } from './../../models/autherize_model';
import { environment } from '../../../environments/environment';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: UserInfo;
  public username:string = "";
  public password:string = "";
  public isLoggedin: boolean = false;
  public isLogin: boolean = false;
  public imageProfile: string = "./assets/images/google.png";
  public titleProfile: string = "sign in with google";
  public gmailLoading:boolean = false;
  public loginLoading:boolean = false;
  public loading:boolean = false;
  public error:boolean = false;
  public error_message:string = "";
  

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (this.auth.isLogin()) {
      this.router.navigate(['dashboard']);
    } 
  }

  async loginTIPS() {

    if(this.username != "" || this.password != ""){
      this.loading = true;
    this.loginLoading = true;
    const auth:any = await this.auth.loginWithTips(this.username,this.password);
    if(auth.ok){
      setTimeout(() => {
        this.register();
      }, 2000);
    }else{
      this.error_message = "กรุณากรอก ` รหัสพนังงานบริษัทและรหัส ` ของพนักงานให้ถูกต้อง";
      this.error = true;
    }
    }else{
      this.error_message = "กรุณากรอก ` รหัสพนังงานบริษัทและรหัส ` ของพนักงาน";
      this.error = true;
    }
  }

  async register() {
    const res:any = await this.auth.getEmployeeInfo(this.username);
    if (res.ok) {
      let user = new UserInfo();
      user.token= res.data.token;
      user.name= res.data.fullName;
      user.employee= res.data.username;
      user.email= res.data.username;
      user.position= res.data.position;
      user.position_desc= res.data.positionDesc;
      user.section= res.data.section;
      user.section_desc= res.data.sectionDesc;
      user.department= res.data.department;
      user.department_desc= res.data.departmentDesc;
      user.division= res.data.division;
      user.division_desc= res.data.divisionDesc;
      //user.picture = this.socialUser.photoUrl;
      this.auth.signCode(user);
      this.isLogin = true;
      setTimeout(() => {
        this.goDashboard();
      }, 2000);
    }
  }

  async loginWithGoogle() {
    this.loading = true;
    this.gmailLoading = true;
    const authGoogle:any = await this.auth.loginWithGoogle();
    if(authGoogle.authToken != undefined && authGoogle.authToken != ""){
      setTimeout(() => {
        this.goDashboard();
      }, 2000);
    }else{
      this.error = true;
      this.error_message = "ไม่พบอีเมลล์ในระบบบริษัท";
    }
  }

  async logout() {
    this.loading = true;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goDashboard(){
    console.log("go Dashbord");
    //this.router.navigate(['/dashboard'])
    location.href = environment.host;
  }
  closeError(){
    this.error = false;
  }

}
