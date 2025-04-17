import { Routes } from '@angular/router';
import { ChambresComponent } from './pages/chambres/chambres.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'chambres', component: ChambresComponent }
];
