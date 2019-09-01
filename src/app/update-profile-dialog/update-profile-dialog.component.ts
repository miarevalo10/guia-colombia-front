import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ProfileService} from '../profile.service';
import {AlertDialogComponent} from '../alert-dialog/alert-dialog.component';

@Component({
    selector: 'app-update-profile-dialog',
    templateUrl: './update-profile-dialog.component.html',
    styleUrls: ['./update-profile-dialog.component.css']
})
export class UpdateProfileDialogComponent implements OnInit {

    updateProfileForm: FormGroup;

    constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<UpdateProfileDialogComponent>,
                private profileService: ProfileService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.initializeForm();
    }

    initializeForm() {
        this.updateProfileForm = this.formBuilder.group({
            firstName: [null, {validators: [Validators.required]}],
            lastName: [null, {validators: [Validators.required]}],
            phone: [null, {validators: [Validators.required]}]
        });
    }

    onCancel() {
        this.dialogRef.close();
    }

    onSubmit() {
        if (this.updateProfileForm.valid) {
            this.profileService.updateProfile(this.updateProfileForm.value).subscribe(result => {
                this.dialogRef.close();
                const data = {
                    title: 'Operación exitosa',
                    description: 'El perfil se actualizó correctamente'
                };
                this.openAlertDialog(data);
            }, (error => {
                const data = {
                    title: 'Error',
                    description: 'Ocurrió un error al actualizar el perfil, por favor inténtelo nuevamente'
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
