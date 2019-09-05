import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
    MatIconModule, MatToolbarModule, MatDialogModule, MatButtonModule, MatInputModule,
    MatFormFieldModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatMenuModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterDialogComponent} from './register-dialog/register-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {AlertDialogComponent} from './alert-dialog/alert-dialog.component';
import {FilterComponent} from './filter/filter.component';
import {GuideListComponent} from './guide-list/guide-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PasswordDialogComponent} from './password-dialog/password-dialog.component';
import { UpdateProfileDialogComponent } from './update-profile-dialog/update-profile-dialog.component';
import { Globals } from './globals';
import { TourListComponent } from './tour-list/tour-list.component';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [
        AppComponent,
        RegisterDialogComponent,
        LoginDialogComponent,
        AlertDialogComponent,
        RegisterDialogComponent,
        FilterComponent,
        GuideListComponent,
        PasswordDialogComponent,
        UpdateProfileDialogComponent,
        TourListComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatCardModule,
        MatChipsModule,
        MatPaginatorModule,
        MatMenuModule,
        MatListModule,
        MatSelectModule
    ],
    providers: [Globals],
    bootstrap: [AppComponent],
    entryComponents: [
        RegisterDialogComponent,
        LoginDialogComponent,
        AlertDialogComponent,
        PasswordDialogComponent,
        UpdateProfileDialogComponent,
    ]
})
export class AppModule {
}
