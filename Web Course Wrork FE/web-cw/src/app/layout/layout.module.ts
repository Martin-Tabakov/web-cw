import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { InventoryModule } from '../inventory/inventory.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [LayoutComponent, NotFoundComponent],
  imports: [
    CommonModule,
    InventoryModule,
    SharedModule,
    AppRoutingModule],
  exports: [LayoutComponent]
})
export class LayoutModule { }
