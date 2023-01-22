import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cw-catalog-filters',
  templateUrl: './catalog-filters.component.html',
  styleUrls: ['./catalog-filters.component.css']
})

export class CatalogFiltersComponent implements OnInit {

  formGroup:FormGroup;

  @Output() filter = new EventEmitter<filterData>();

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
    console.log({
      code:this.formGroup.get("code")?.value,
      category: this.formGroup.get("category")?.value
    });
    this.filter.emit({
      code:this.formGroup.get("code")?.value,
      category: this.formGroup.get("category")?.value
    });

  }

  reset():void {
    this.formGroup.reset();
  }

}

export class filterData{
  constructor(public code?: string,public category?: string){}

}