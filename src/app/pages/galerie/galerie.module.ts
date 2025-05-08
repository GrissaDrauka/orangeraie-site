import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { GalerieComponent } from './galerie.component';

const routes: Routes = [
  {
    path: '', component: GalerieComponent
  }
];

@NgModule({
  declarations: [GalerieComponent],
  imports: [
    CommonModule,
    DialogModule,
    TranslateModule,
    RouterModule.forChild(routes) // ✅ à ne pas oublier
  ]
})
export class GalerieModule { }
