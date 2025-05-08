import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InfosPratiquesComponent } from './infos-pratiques.component';

const routes: Routes = [
    { path: '', component: InfosPratiquesComponent }
];

@NgModule({
    declarations: [InfosPratiquesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule
    ]
})
export class InfosPratiquesModule { }
