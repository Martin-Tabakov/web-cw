import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit(): void {  }


  onSubmit(): void {
    let values = this.formGroup.value;

    this.inventoryService.create(values).subscribe( next=> this.router.navigate(['details',next.id]));
  }

  onBack(): void {
    this.router.navigate(['catalog']);
  }
}
