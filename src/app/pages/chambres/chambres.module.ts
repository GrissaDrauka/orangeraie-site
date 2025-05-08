import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChambresRoutingModule } from './chambres-routing.module';
import { ChambresComponent } from './chambres.component';
import { LucideAngularModule, icons } from 'lucide-angular';

@NgModule({
    declarations: [ChambresComponent],
    imports: [
        CommonModule,
        TranslateModule,
        ChambresRoutingModule,
        LucideAngularModule.pick(icons)
    ]
})
export class ChambresModule { }
