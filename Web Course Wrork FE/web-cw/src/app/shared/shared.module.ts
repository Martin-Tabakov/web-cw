import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../layout/nav/nav.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [NavComponent, DialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [NavComponent]
})
export class SharedModule { }
