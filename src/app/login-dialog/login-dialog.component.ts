import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { UserService } from '../user.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<LoginDialogComponent>,
              private userService: UserService, public dialog: MatDialog) { }

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
      this.userService.login(this.loginForm.value).subscribe(result => {
        this.dialogRef.close();
        const data = {
          title: 'Login exitoso',
          description: 'Se realizó el login de manera correcta'
        };
        this.openAlertDialog(data);
      }, (error => {
        const data = {
          title: 'Error',
          description: 'Ocurrió un error en el login, por favor inténtelo de nuevp'
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
