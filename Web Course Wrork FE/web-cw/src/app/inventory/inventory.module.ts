import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { MaterialModule } from '../shared/material.module';
import { CatalogFiltersComponent } from './catalog-filters/catalog-filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogGalleryComponent } from './catalog-gallery/catalog-gallery.component';



@NgModule({
  declarations: [
    CatalogComponent,
    CatalogFiltersComponent,
    CatalogGalleryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InventoryModule { }
