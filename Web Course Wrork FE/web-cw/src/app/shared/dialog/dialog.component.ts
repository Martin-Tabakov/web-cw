import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cw-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Output() result$ = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>
   ) { }

  ngOnInit(): void {
  }

  onConfirmedDelete(){
    this.result$.emit(true);
    this.dialogRef.close();
  }

  onRejectedDelete(){
    this.result$.emit(false);
    this.dialogRef.close();
  }
}
