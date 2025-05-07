import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiteComponent } from './gite.component';
import { GalleriaModule } from 'primeng/galleria';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [GiteComponent],
    imports: [
        CommonModule,
        GalleriaModule,
        DialogModule,
        RouterModule,
        TranslateModule
    ],
    exports: [GiteComponent]
})
export class GiteModule { }
