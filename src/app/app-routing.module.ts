import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuideListComponent} from './guide-list/guide-list.component';
import {TourListComponent} from './tour-list/tour-list.component';


const routes: Routes = [
    {path: '', component: GuideListComponent},
    {path: 'tours/:id', component: TourListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
