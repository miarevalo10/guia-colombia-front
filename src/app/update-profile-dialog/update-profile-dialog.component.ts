import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ProfileService} from '../profile.service';
import {AlertDialogComponent} from '../alert-dialog/alert-dialog.component';
import { AuthService } from '../auth.service';
import { UtilsService } from '../utils.service';
import { User } from '../user';
import { Globals } from '../globals';

@Component({
    selector: 'app-update-profile-dialog',
    templateUrl: './update-profile-dialog.component.html',
    styleUrls: ['./update-profile-dialog.component.css']
})
export class UpdateProfileDialogComponent implements OnInit {

    updateProfileForm: FormGroup;

    constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<UpdateProfileDialogComponent>,
                private profileService: ProfileService, public dialog: MatDialog, private authService: AuthService,
                private utils: UtilsService, private globals: Globals, private utilsService: UtilsService) {
    }

    ngOnInit() {
        this.initializeForm();
    }

    initializeForm() {
        const user = this.globals.user;
        console.log('user', user);
        this.updateProfileForm = this.formBuilder.group({
            firstName: [user.firstName, {validators: [Validators.required]}],
            lastName: [user.lastName, {validators: [Validators.required]}],
            phone: [user.phone, {validators: [Validators.required]}]
        });
    }

    onCancel() {
        this.dialogRef.close();
    }

    onSubmit() {
        if (this.updateProfileForm.valid) {
            this.profileService.updateProfile(this.updateProfileForm.value).subscribe(result => {
                this.globals.setUser(result);
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
