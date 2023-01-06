import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { MaterialModule } from '../shared/material.module';
import { CatalogFiltersComponent } from './catalog-filters/catalog-filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogGalleryComponent } from './catalog-gallery/catalog-gallery.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CatalogComponent,
    CatalogFiltersComponent,
    CatalogGalleryComponent,
    ItemDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class InventoryModule { }
