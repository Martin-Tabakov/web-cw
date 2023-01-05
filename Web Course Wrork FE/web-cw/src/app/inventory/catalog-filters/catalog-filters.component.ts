import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cw-catalog-filters',
  templateUrl: './catalog-filters.component.html',
  styleUrls: ['./catalog-filters.component.css']
})
export class CatalogFiltersComponent implements OnInit {

  formGroup:FormGroup;

  constructor(private formBuilder:FormBuilder) {

    this.formGroup = formBuilder.group({
      code: "",
      category: ""
    });

   }

   ngOnInit(): void {
    this.formGroup.reset();
  }

  onSubmit():void {

  }

  reset():void {
    this.formGroup.reset();
  }

}
