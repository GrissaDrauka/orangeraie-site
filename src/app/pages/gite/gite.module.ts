import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { GiteComponent } from './gite.component';

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
