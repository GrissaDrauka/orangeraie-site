import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { GiteComponent } from './gite.component';

const routes: Routes = [
    { path: '', component: GiteComponent }
];

@NgModule({
    declarations: [GiteComponent],
    imports: [
        CommonModule,
        GalleriaModule,
        DialogModule,
        RouterModule.forChild(routes),
        TranslateModule
    ],
    exports: [GiteComponent]
})
export class GiteModule { }
