import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { item } from 'src/app/data/models/item';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'cw-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  formGroup: FormGroup;
  item: item | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute) {


    this.formGroup = this.formBuilder.group({
      name: ["", Validators.required],
      category: ["", Validators.required],
      purchasePrice: ["", Validators.required],
      retailPrice: ["", Validators.required],
      quantity: ["", Validators.required],
      code: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap(params => {
        let id = String(params.get('id'));
        return this.inventoryService.getById(id);
      })).subscribe(res => {
        this.item = res;
        this.formGroup.patchValue({
          name: this.item.name,
          category: this.item.category,
          purchasePrice: this.item.purchasePrice,
          retailPrice: this.item.retailPrice,
          quantity: this.item.quantity,
          code: this.item.productCode,
          description: this.item.description
        });
      });
  }

  onSubmit(): void {
    let values = this.formGroup.value;
    if (this.item) {
      this.inventoryService.update(values, this.item.id).subscribe(next => this.router.navigate(['details', this.item?.id]));
    }

  }

  onBack(): void {
    this.router.navigate(['details', this.item?.id]);
  }

}
