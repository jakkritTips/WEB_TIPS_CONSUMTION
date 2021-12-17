import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { UserInfo } from './../../models/autherize_model';
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
    await this.auth.loginWithGoogle().then(() => this.router.navigate(['dashboard']));
  }

}
