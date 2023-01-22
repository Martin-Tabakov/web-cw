import { Component, OnInit } from '@angular/core';
import { filterData } from '../catalog-filters/catalog-filters.component';

@Component({
  selector: 'cw-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  filter: filterData | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  passFilters( data: filterData): any {
    this.filter = data;
  }

}
