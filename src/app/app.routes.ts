import { Routes } from '@angular/router';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { GiteComponent } from './pages/gite/gite.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'chambres', component: ChambresComponent },
  {
    path: 'gite', loadComponent: () =>
      import('./pages/gite/gite.component').then((m) => m.GiteComponent)
  }
];
