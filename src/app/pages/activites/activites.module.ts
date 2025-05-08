import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ActivitesComponent } from './activites.component';

const routes: Routes = [
    { path: '', component: ActivitesComponent }
];

@NgModule({
    declarations: [ActivitesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule
    ]
})
export class ActivitesModule { }
