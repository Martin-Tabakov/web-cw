import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { catalog_item } from 'src/app/data/interfaces/catalog_item';
import { InventoryService } from 'src/app/services/inventory.service';
import { filterData } from '../catalog-filters/catalog-filters.component';

@Component({
  selector: 'cw-catalog-gallery',
  templateUrl: './catalog-gallery.component.html',
  styleUrls: ['./catalog-gallery.component.css']
})
export class CatalogGalleryComponent implements OnInit {

  @Input() filterData: filterData | undefined = undefined;

  length = 50;
  pageSize = 2;
  pageIndex = 0;

  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.setPaginatedData();
  }

  dataSource: catalog_item[] = [];
  filteredData: catalog_item[] = [];
  paginatedData: catalog_item[] = [];

  displayedColumns = ["name","category","productCode","price","view"];

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getAll().subscribe(next => {
       this.dataSource = next;
       this.length = this.dataSource.length;
       this.setFilteredData(this.filterData);
       this.setPaginatedData();
      });
  }

  private setFilteredData(data: filterData | undefined): void {
    
    this.filteredData = JSON.parse(JSON.stringify(this.dataSource));
    if(data?.category == null && data?.code == null){
      this.length = this.filteredData.length;
      return;
    } 

    if(data.code != null)
    this.filteredData = this.filteredData.filter(item => item.productCode == data?.code);

    if(data.category != null)
    this.filteredData = this.filteredData.filter(item => item.category.toString() == data?.category);

    this.length = this.filteredData.length;
  }

  private setPaginatedData(): void {
    let start = this.pageSize * this.pageIndex;
    let end: number | undefined = this.pageSize * this.pageIndex + this.pageSize;
    if(end > this.filteredData.length) end = undefined;
    this.paginatedData = this.filteredData.slice(start, end);
  }

  ngOnChanges() {
    this.setFilteredData(this.filterData);
    this.setPaginatedData();
  }
}
