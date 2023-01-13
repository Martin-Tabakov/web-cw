import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/data/models/user';
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
    private identity:IdentityService
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

    if(!this.formGroup.valid) return;

    this.identity.login({username:"userName",password:"password"})
    .subscribe(next =>{
      let loggedUser:user = {id: next.id, email: next.email, username: next.username, phone: next.phone};

      this.identity.setCurrentUser(loggedUser);
      this.identity.loggedIn.next(true);
      this.router.navigate(['catalog']);
    },
    error => {
      //TODO: Add pop-up with error message
    });
  }

}
