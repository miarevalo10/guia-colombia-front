import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { UserService } from '../user.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { AuthService } from '../auth.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<LoginDialogComponent>,
              private authService: AuthService, public dialog: MatDialog, private globals: Globals) { }

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
    if (this.loginForm.valid) {
      this.authService.signIn(this.loginForm.value).subscribe(result => {
        this.globals.setUser(result.user);
        this.globals.setToken(result.token);
        this.dialogRef.close({data: 'Succesful login'});
        const data = {
          title: 'Login exitoso',
        };
        this.openAlertDialog(data);
      }, (error => {
        let data = {};
        if (error.error.non_field_errors) {
          data = {
            title: 'Error',
            description: 'La contraseña o el username ingresados no son correctos'
          };
        } else {
          data = {
            title: 'Error',
            description: 'Ocurrió un error en el login, por favor inténtelo de nuevo'
          };
        }
        this.openAlertDialog(data);
        console.error(error.error);
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
