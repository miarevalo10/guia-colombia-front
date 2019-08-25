import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<RegisterDialogComponent>,
              private userService: UserService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      email: [null, { validators: [Validators.required, Validators.email], updateOn: 'submit' }],
      username: [null, { validators: [Validators.required], updateOn: 'submit' }],
      password: [null, { validators: [Validators.required], updateOn: 'submit' }],
      confirmPassword: [null, { validators: [Validators.required], updateOn: 'submit' }],
      firstName: [null, { validators: [Validators.required], updateOn: 'submit' }],
      lastName: [null, { validators: [Validators.required], updateOn: 'submit' }],
      phone: [null, { validators: [Validators.required], updateOn: 'submit' }]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe(result => {
        console.log('result', result);
        this.dialogRef.close();
      });
    }
  }



}
