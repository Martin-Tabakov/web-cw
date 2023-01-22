import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { InventoryModule } from '../inventory/inventory.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    InventoryModule,
    SharedModule,
    AppRoutingModule],
  exports: [LayoutComponent]
})
export class LayoutModule { }
