import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia-colombia-front';

  constructor(public dialog: MatDialog) {}

  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent, {
      width: '40%'
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '40%'
    });
  }

}
