import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'cw-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private identity:IdentityService
    ) {
    this.formGroup = this.formBuilder.group({
      username: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      phone: ["", Validators.required],
      email: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
  }

  async onRegister(): Promise<void> {

    if(!this.formGroup.valid) return;

    let dto = {
      email: this.formGroup.get('email')?.value,
      username: this.formGroup.get('username')?.value,
      phone: this.formGroup.get('phone')?.value,
      password: this.formGroup.get('password')?.value
    }

    this.identity.register(dto).subscribe(next => {
      this.identity.setCurrentUser(next);
      this.identity.loggedIn.next(true);
      this.router.navigate(['catalog']);
    },
    error => {
      //TODO: Display pop-up with error message
    })
  }
}
