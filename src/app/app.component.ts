import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthenticationService } from './../app/services/authentication.service';
import { FAASService } from './../app/services/faas.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserInfo } from './models/autherize_model'
declare const ui: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public user: UserInfo;
  public socialUser: SocialUser;
  public isLoggedin: boolean = false;
  public menuOpen: boolean = false;
  public isLogin: boolean = false;
  public imageProfile: string = "";
  public titleProfile: string = "";

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private faas: FAASService,
    private auth: AuthenticationService,
  ) { }



  async ngOnInit() {
    this.user = new UserInfo();
    console.log(ui);

    ui.noti.s("ทำการบันทึกเรียบร้อย");

    this.setMenu();
    this.setDetailDefault();
    this.setMenuSlide();

    this.getAsset();

    if (this.auth.isLogin()) {
      this.isLogin = true;
      this.user = this.auth.getUser();
      console.log("LOGIN SUCCESS",this.user);
    } else {
      this.socialAuthService.authState.subscribe((userGoogle) => {
        this.socialUser = userGoogle;
        this.isLoggedin = (userGoogle != null);
        console.log("userGoogle",userGoogle);
        if (this.socialUser != null) {
          this.checkTIPSEmail(this.socialUser.email);
          
        }
      });
    }
  }

  async getAsset() {
    let res:any = await this.faas.getAsset();
    console.log(res);
  }

  async checkTIPSEmail(email) {
    let res:any = await this.auth.getEmployeeInfo(email);
        if (res.ok) {
          let user = new UserInfo();
          user.token= res.data.token;
          user.name= res.data.fullName;
          user.employee= res.data.username;
          user.email= email;
          user.position= res.data.position;
          user.position_desc= res.data.positionDesc;
          user.section= res.data.section;
          user.section_desc= res.data.sectionDesc;
          user.department= res.data.department;
          user.department_desc= res.data.departmentDesc;
          user.division= res.data.division;
          user.division_desc= res.data.divisionDesc;
          user.picture = this.socialUser.photoUrl;
          this.auth.signCode(user);
          this.isLogin = true;
          console.log("USER :: ",this.auth.getUser());
        }
  }

  async setMenuSlide() {
    $(".sidebar-main,.content-wrapper").height($(window).height() - 54);
  }

  async loginWithGoogle() {
    if (!this.isLogin) {
      await this.auth.loginWithGoogle().then(() => this.router.navigate(['dashboard']));
    }
  }

  async logOut() {
    try {
      await this.auth.logOut().then(() => this.router.navigate(['login']));
      this.isLogin = false;
      this.setDetailDefault();
      this.closeNav();
    } catch {
      this.isLogin = false;
      this.setDetailDefault();
      this.closeNav();
    }
  }

  nav() {
    if (this.menuOpen) {
      this.openNav();
    } else {
      this.closeNav();
    }
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "50px";
    document.getElementById("main").style.marginLeft = "50px";
    var menu = document.getElementsByClassName("p-panelmenu-icon");

    // var i;
    // for (i = 0; i < menu.length; i++) {
    //   document.getElementsByClassName("p-panelmenu-icon")[0].style.display = 'none';
    // }


    this.menuOpen = false;

  }

  setDetailDefault() {
    this.imageProfile = "./assets/images/google.png";
    this.titleProfile = "sign in with google";
  }

  setMenu() {
    // this.items = [
    //   {
    //     label: 'File',
    //     icon: 'pi pi-fw pi-file',
    //     items: [
    //       {
    //         label: 'New',
    //         icon: 'pi pi-fw pi-plus',
    //       },
    //       {
    //         label: 'Delete',
    //         icon: 'pi pi-fw pi-trash'
    //       },
    //       {
    //         label: 'Export',
    //         icon: 'pi pi-fw pi-external-link'
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Edit',
    //     icon: 'pi pi-fw pi-pencil',
    //     items: [
    //       {
    //         label: 'Left',
    //         icon: 'pi pi-fw pi-align-left'
    //       },
    //       {
    //         label: 'Right',
    //         icon: 'pi pi-fw pi-align-right'
    //       },
    //       {
    //         label: 'Center',
    //         icon: 'pi pi-fw pi-align-center'
    //       },
    //       {
    //         label: 'Justify',
    //         icon: 'pi pi-fw pi-align-justify'
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Users',
    //     icon: 'pi pi-fw pi-user',
    //     items: [
    //       {
    //         label: 'New',
    //         icon: 'pi pi-fw pi-user-plus',

    //       },
    //       {
    //         label: 'Delete',
    //         icon: 'pi pi-fw pi-user-minus',
    //       },
    //       {
    //         label: 'Search',
    //         icon: 'pi pi-fw pi-users',
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Events',
    //     icon: 'pi pi-fw pi-calendar',
    //     items: [
    //       {
    //         label: 'Edit',
    //         icon: 'pi pi-fw pi-pencil',
    //       },
    //       {
    //         label: 'Archieve',
    //         icon: 'pi pi-fw pi-calendar-times',
    //         items: [
    //           {
    //             label: 'Remove',
    //             icon: 'pi pi-fw pi-calendar-minus'
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ]
  }

}