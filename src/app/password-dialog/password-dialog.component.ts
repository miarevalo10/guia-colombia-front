import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AlertDialogComponent} from '../alert-dialog/alert-dialog.component';
import {PasswordService} from '../password.service';

@Component({
    selector: 'app-password-dialog',
    templateUrl: './password-dialog.component.html',
    styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {

    passwordForm: FormGroup;

    constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<PasswordDialogComponent>,
                private passwordService: PasswordService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.initializeForm();
    }

    initializeForm() {
        this.passwordForm = this.formBuilder.group({
            currentPassword: [null, {validators: [Validators.required]}],
            password: [null, {validators: [Validators.required]}],
            confirmPassword: [null, {validators: [Validators.required]}],
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSubmit() {
        if (this.passwordForm.valid) {
            if (this.passwordForm.value.currentPassword === this.passwordForm.value.password) {
                const data = {
                    title: 'Error de Validación',
                    description: 'La contraseña nueva no debe ser igual a la contraseña actual'
                };
                this.openAlertDialog(data);
            } else {
                this.passwordService.changePassword(this.passwordForm.value).subscribe(result => {
                    this.dialogRef.close();
                    const data = {
                        title: 'Operación exitosa',
                        description: 'La contraseña se cambió correctamente'
                    };
                    this.openAlertDialog(data);
                }, (error => {
                    const data = {
                        title: 'Error',
                        description: 'Ocurrió un error al cambiar la contraseña, por favor inténtelo nuevamente'
                    };
                    this.openAlertDialog(data);
                    console.error(error);
                }));
            }
        }
    }

    openAlertDialog(dataObj) {
        this.dialog.open(AlertDialogComponent, {
            width: '300px',
            data: dataObj
        });
    }
}
