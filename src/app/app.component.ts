import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AuthService } from './auth.service';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { UpdateProfileDialogComponent } from './update-profile-dialog/update-profile-dialog.component';
import { Globals } from './globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia-colombia-front';

  isLoggedIn = false;
  user;

  constructor(public dialog: MatDialog, private authService: AuthService, public globals: Globals,
              private router: Router) {
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
      if (result) {
        // this.validateLogin();
      }
    });
  }

  openPasswordDialog() {
    this.dialog.open(PasswordDialogComponent, {
      width: '40%'
    });
  }

  logout() {
    // this.authService.removeTokenLocalStorage();
    this.globals.clearData();
    this.router.navigate(['/']);
    // this.validateLogin();
  }

  openProfileUpdateDialog() {
    this.dialog.open(UpdateProfileDialogComponent, {
      width: '40%'
    });
  }
}
