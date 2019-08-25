import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<RegisterDialogComponent>) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('Submitted');
  }



}
