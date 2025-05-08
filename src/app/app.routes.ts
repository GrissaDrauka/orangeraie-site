import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
//import { ContactComponent } from './pages/contact/contact.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { ChambreDetailComponent } from './pages/chambre-detail/chambre-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'chambres',
    loadChildren: () => import('./pages/chambres/chambres.module').then(m => m.ChambresModule)
  },
  {
    path: 'gite',
    loadChildren: () => import('./pages/gite/gite.module').then(m => m.GiteModule)
  },
  //{ path: 'contact', component: ContactComponent },
  { path: 'chambres/:slug', component: ChambreDetailComponent },
  {
    path: 'reservation',
    loadChildren: () => import('./pages/reservation/reservation.module').then(m => m.ReservationModule)
  },
  {
    path: 'infos-pratiques',
    loadChildren: () => import('./pages/infos-pratiques/infos-pratiques.module').then(m => m.InfosPratiquesModule)
  },
  {
    path: 'activites',
    loadChildren: () => import('./pages/activites/activites.module').then(m => m.ActivitesModule)
  },
];
