import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambresComponent } from './chambres.component';

const routes: Routes = [
    {
        path: '',
        component: ChambresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChambresRoutingModule { }
