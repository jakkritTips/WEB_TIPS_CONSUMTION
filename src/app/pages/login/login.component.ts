import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public imageProfile: string = "./assets/images/google.png";
  public titleProfile: string = "sign in with google";

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  async loginWithGoogle() {
    await this.auth.loginWithGoogle().then(() => this.router.navigate(['dashboard']));
  }

}
