import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia-colombia-front';

  isLoggedIn = false;
  user;

  constructor(public dialog: MatDialog,  private authService: AuthService) {
    this.validateLogin();
    if (this.isLoggedIn) {
      this.user = this.authService.user;
    }
  }

  validateLogin() {
    console.log('logged valdiation', this.authService.isLoggedIn());
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  openRegisterDialog() {
    this.dialog.open(RegisterDialogComponent, {
      width: '40%'
    });
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.validateLogin();
      }
    });
  }

  logout() {
    this.authService.removeTokenLocalStorage();
    this.validateLogin();
    // window.location.reload();
  }

}
