import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { item } from 'src/app/data/models/item';
import { InventoryService } from 'src/app/services/inventory.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'cw-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: item | undefined;
  isPublisherLoggedIn: boolean = false;

  dialogRef: MatDialogRef<DialogComponent> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router :Router,
    private inventoryService: InventoryService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {

     this.route.paramMap.pipe(
      switchMap(params => {
        let id = String(params.get('id'));
        return this.inventoryService.getById(id);
      })).subscribe(res=>{
        this.item = res;
      });

  }

  initiateDelete(id: string | undefined): void{
    this.dialogRef = this.dialog.open(DialogComponent);
    this.dialogRef.componentInstance.result$.subscribe(next => {
      if (next) this.delete(id);
    })
  }

  delete(id: string | undefined): void {
    this.inventoryService.delete(id).subscribe( next => {
      if(next) this.router.navigate(['catalog'])
    });
  }
}