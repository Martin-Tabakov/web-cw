import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../layout/nav/nav.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [NavComponent]
})
export class SharedModule { }
