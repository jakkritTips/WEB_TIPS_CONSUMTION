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
  public isLoggedin: boolean = false;
  public isLogin: boolean = false;
  public imageProfile: string = "./assets/images/google.png";
  public titleProfile: string = "sign in with google";
  public loading:boolean = false;
  

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (this.auth.isLogin()) {
      this.router.navigate(['dashboard']);
    } 
  }

  async loginWithGoogle() {
    this.loading = true;
    const authGoogle:any = await this.auth.loginWithGoogle();
    if(authGoogle.authToken != undefined && authGoogle.authToken != ""){
      this.goDashboard();
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

}
