import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MentionsLegalesComponent } from './mentions-legales.component';

const routes: Routes = [
    { path: '', component: MentionsLegalesComponent }
];

@NgModule({
    declarations: [MentionsLegalesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule
    ]
})
export class MentionsLegalesModule { }
