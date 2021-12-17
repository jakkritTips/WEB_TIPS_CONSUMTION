import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private socialAuthService: SocialAuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem(environment.auth) == null) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true
    }
  }

}