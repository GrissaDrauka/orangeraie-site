import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { GiteComponent } from './pages/gite/gite.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chambres', component: ChambresComponent },
  {
    path: 'gite',
    component: GiteComponent
  }
];
