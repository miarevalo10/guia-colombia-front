import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface AlertDialogData {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent {

  constructor( public dialogRef: MatDialogRef<AlertDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: AlertDialogData) { }

}
