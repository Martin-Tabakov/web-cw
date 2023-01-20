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

    let mockData = {
      username: "userName",
      email: "user@mail.com",
      password:"pass",
      phone: "0888888880"
    }

    this.identity.register(mockData).subscribe(next => {
      this.identity.setCurrentUser(next);
      this.identity.loggedIn.next(true);
      this.router.navigate(['catalog']);
    },
    error => {
      //TODO: Display pop-up with error message
    })
    // let is_user:boolean = (this.formGroup.get('type_choice')?.value == true)? true: false;

    // let dto: register_send_dto = {
    //   Email: this.formGroup.get('email')?.value,
    //   Name: this.formGroup.get('name')?.value,
    //   Password: this.formGroup.get('password')?.value
    // }

    // this.identityService.register(dto,is_user).subscribe(next => {
      
    //   this.identityService.saveUserId(next.id);
    //   this.identityService.saveUserType(next.userType);
      
    //   this.router.navigate(['/profile',this.identityService.getUserId()])
    // })
  }
}
