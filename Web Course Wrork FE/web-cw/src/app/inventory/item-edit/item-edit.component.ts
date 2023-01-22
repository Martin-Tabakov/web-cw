import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
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
    private route: ActivatedRoute,
    private failedUpdate: MatSnackBar) {


    this.formGroup = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      category: ["", Validators.required],
      purchasePrice: ["", [Validators.required, Validators.min(0.01)]],
      retailPrice: ["", [Validators.required, Validators.min(0.01)]],
      quantity: ["", [Validators.required, Validators.min(0)]],
      code: ["", Validators.required],
      description: ["", [Validators.required, Validators.maxLength(2000)]]
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
      this.inventoryService.update(values, this.item.id).subscribe(next => {
          this.router.navigate(['details', this.item?.id])
      },
      error => {
        console.log(error);
        this.failedUpdate.open("Failed to update item.", "Close")
      });
    }

  }

  onBack(): void {
    this.router.navigate(['details', this.item?.id]);
  }

}
