import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private identityService: IdentityService
    ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.identityService.logout();
    this.router.navigate(["/login"]);
  }

  homeButtonClicked(): void {
    if(this.isLoggedIn) this.router.navigate(["catalog"]);
    else this.router.navigate(["login"]);
  }
}