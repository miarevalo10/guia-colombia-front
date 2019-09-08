import { Component, Input, OnInit } from '@angular/core';
import { Tour } from '../Tour';
import { TourService } from '../tour.service';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../mail.service';
import { Globals } from '../globals';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
    selector: 'app-tour-list',
    templateUrl: './tour-list.component.html',
    styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
    tourList = [];
    tourId: number;
    loading = false;
    constructor(private tourService: TourService, private route: ActivatedRoute,
                private mailService: MailService, private globals: Globals, public alertDialog: MatDialog) {
    }

    ngOnInit() {
        this.getTourList();
    }

    getTourList() {
        this.tourId = +(this.route.snapshot.paramMap.get('id'));
        this.tourService.getTourList(this.tourId).subscribe(value => this.loadPage(value));
    }

    private loadPage(tourList: Tour[]) {
        this.tourList = tourList;
        for (const tour of this.tourList) {
            tour.activityList = tour.activities.trim().split(';');
        }
        console.warn(tourList);
    }

    sendEmail(tourId: number) {
        if (!this.globals.getUser()) {
            const data = {
                title: 'Alerta',
                description: 'Para enviar un correo debe haber ingresado como usuario'
            };
            this.openAlertDialog(data);

        } else {
            this.loading = true;
            this.mailService.sendMail(tourId).subscribe(result => {
                let data = {};
                // tslint:disable-next-line: no-string-literal
                if (result['status'] === 200) {
                    data = {
                        title: 'Envío de correo exitoso',
                        description: 'El correo ha sido enviado correctamente'
                    };
                } else {
                    data = {
                        title: 'Error',
                        description: 'Ha ocurrido un error enviando el correo, por favor inténtelo de nuevo'
                    };
                }
                this.openAlertDialog(data);

                this.loading = false;
            });
        }
    }

    private openAlertDialog(dataObj) {
        this.alertDialog.open(AlertDialogComponent, {
            width: '300px',
            data: dataObj
        });
    }
}
