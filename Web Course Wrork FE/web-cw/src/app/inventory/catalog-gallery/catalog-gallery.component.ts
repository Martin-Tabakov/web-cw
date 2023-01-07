import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { catalog_item } from 'src/app/data/interfaces/catalog_item';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'cw-catalog-gallery',
  templateUrl: './catalog-gallery.component.html',
  styleUrls: ['./catalog-gallery.component.css']
})
export class CatalogGalleryComponent implements OnInit {

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
  paginatedData: catalog_item[] = [];

  displayedColumns = ["name","category","price","view"];

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getAll().subscribe(next => {
       this.dataSource = next;
       this.length = this.dataSource.length;
       this.setPaginatedData();
      });
  }

  private setPaginatedData(): void {
    let start = this.pageSize * this.pageIndex;
    let end: number | undefined = this.pageSize * this.pageIndex + this.pageSize;
    if(end > this.dataSource.length) end = undefined;
    this.paginatedData = this.dataSource.slice(start, end);
  }

}
