import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'cw-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  formGroup:FormGroup;

   id?:string;

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private identity: IdentityService
  ) {
    this.formGroup = formBuilder.group({
      pass: ["",[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      repeatPass: ["",[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
   }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        let id = String(params.get('id'));
        this.id = id;
        return id;
      })).subscribe(next =>{

      });
  }

  onSubmit(): void {
    this.identity.resetPassword({Id:this.id,NewPassword: this.formGroup.get("pass")?.value}).subscribe(next => {
      this.identity.clearCurrentUser();
      this.identity.loggedIn.next(false);
      this.router.navigate(['login']);
    },
    error => {
      //TODO: display error pop-up
    });
  }
}
