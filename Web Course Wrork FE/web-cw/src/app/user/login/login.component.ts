import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'cw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private loginNotification: MatSnackBar,
    private identityService: IdentityService
    ) {

    this.formGroup = formBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    });
   }

  ngOnInit(): void {
    this.formGroup.reset();
  }

  async onLogin(): Promise<void> {

    this.identityService.login().subscribe(next => {
      if(!next) this.loginNotification.open("Failed to log in.", "Close");
    })
    // let dto: login_send_dto = {
    //   Email: this.formGroup.get('email')?.value,
    //   Password: this.formGroup.get('password')?.value
    // }


    // this.identityService.logIn(dto).subscribe(
    //   next => {
    //     console.log(next);
    //     this.identityService.saveUserId(next.id);
    //     this.identityService.saveUserType(next.userType);
    //     this.identityService.loggedIn.next(true);
    //     this.router.navigate(['/profile',this.identityService.getUserId()]);
    //   }
    // );
  }

}
