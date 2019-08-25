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
      email: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    });
  }
  get f() { return this.registerForm.controls; }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('Submitted', this.registerForm );
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe(result => {
        console.log('result', result);
      });
    }
  }



}
