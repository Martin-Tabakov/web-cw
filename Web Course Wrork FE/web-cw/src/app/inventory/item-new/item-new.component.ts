import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { item } from 'src/app/data/models/item';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'cw-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

  formGroup: FormGroup;
  item: item | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute,
    private failedCreateItem: MatSnackBar) {


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

  ngOnInit(): void { }


  onSubmit(): void {
    let values = this.formGroup.value;

    this.inventoryService.create(values).subscribe(
      next => this.router.navigate(['details', next.id]),
      error => {
        console.log(error);
        this.failedCreateItem.open("Failed to create item.", "Close")
      });
  }

  onBack(): void {
    this.router.navigate(['catalog']);
  }
}
