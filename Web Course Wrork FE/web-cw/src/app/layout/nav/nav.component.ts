import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailClientService } from 'src/app/services/email-client.service';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'cw-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private identityService: IdentityService,
    private emailClientService: EmailClientService
    ) { }

  ngOnInit(): void {
    this.identityService.loggedIn$.subscribe(next => this.isLoggedIn = next);
  }

  logout(): void {
    this.identityService.logout();
    
    this.router.navigate(["login"]);
  }

  homeButtonClicked(): void {
    if(this.isLoggedIn) this.router.navigate(["catalog"]);
    else this.router.navigate(["login"]);
  }

  forceLogin(): void {
    this.identityService.loggedIn.next(true);
  }

  resetPassword(): void {
    let currentUser = this.identityService.getCurrentUser();
    this.emailClientService.sendResetPasswordMail(currentUser);
  }
}