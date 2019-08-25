import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia-colombia-front';

  constructor(public dialog: MatDialog) {}

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '40%'
    });
    dialogRef.afterClosed().subscribe(_ => {
      console.log('its closed');
    });
  }

}
