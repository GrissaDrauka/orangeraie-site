import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, icons } from 'lucide-angular';
import { ReservationComponent } from './reservation.component';

const routes: Routes = [
    { path: '', component: ReservationComponent }
];

@NgModule({
    declarations: [ReservationComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule,
        LucideAngularModule.pick(icons)
    ]
})
export class ReservationModule { }
