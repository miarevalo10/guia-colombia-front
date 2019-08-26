import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { UserService } from '../user.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<LoginDialogComponent>,
              private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      username: [null, { validators: [Validators.required]}],
      password: [null, { validators: [Validators.required]}],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('login');
    if (this.loginForm.valid) {
      this.authService.signIn(this.loginForm.value).subscribe(result => {
        console.log('result', result);
        this.authService.addUserLocalStorage(result.token, result.user);
        this.dialogRef.close({data: 'Succesful login'});
        const data = {
          title: 'Login exitoso',
        };
        this.openAlertDialog(data);
      }, (error => {
        const data = {
          title: 'Error',
          description: 'Ocurrió un error en el login, por favor inténtelo de nuevo'
        };
        this.openAlertDialog(data);
        console.error(error);
      }));
    }
  }

  openAlertDialog(dataObj) {
    this.dialog.open(AlertDialogComponent, {
      width: '300px',
      data: dataObj
    });
  }

}
