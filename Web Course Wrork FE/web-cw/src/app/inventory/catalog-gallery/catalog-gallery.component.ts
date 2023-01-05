import { Component, OnInit } from '@angular/core';
import { catalog_item } from 'src/app/data/interfaces/catalog_item';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'cw-catalog-gallery',
  templateUrl: './catalog-gallery.component.html',
  styleUrls: ['./catalog-gallery.component.css']
})
export class CatalogGalleryComponent implements OnInit {

  dataSource: catalog_item[] = [{name:"name",category:"cat",retailPrice:1.2}];

  displayedColumns = ["name","category","price","view"];

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getAll().subscribe(next => this.dataSource = next);
  }

}
