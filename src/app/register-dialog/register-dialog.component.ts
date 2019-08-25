import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { UserService } from '../user.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<RegisterDialogComponent>,
    private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      email: [null, { validators: [Validators.required, Validators.email] }],
      username: [null, { validators: [Validators.required] }],
      password: [null, { validators: [Validators.required] }],
      confirmPassword: [null, { validators: [Validators.required] }],
      firstName: [null, { validators: [Validators.required] }],
      lastName: [null, { validators: [Validators.required] }],
      phone: [null, { validators: [Validators.required] }]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe(result => {
        this.dialogRef.close();
        const data = {
          title: 'Registro exitoso',
          description: 'El usuario se registró correctamente'
        };
        this.openAlertDialog(data);
      }, (error => {
        const data = {
          title: 'Error',
          description: 'Ocurrió un error en el registro, por favor inténtelo de nuevo'
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
