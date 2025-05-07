import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { GiteComponent } from './pages/gite/gite.component';
//import { ContactComponent } from './pages/contact/contact.component';
import { ChambreDetailComponent } from './pages/chambre-detail/chambre-detail.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { InfosPratiquesComponent } from './pages/infos-pratiques/infos-pratiques.component';
import { ActivitesComponent } from './pages/activites/activites.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chambres', component: ChambresComponent },
  { path: 'gite', component: GiteComponent },
  //{ path: 'contact', component: ContactComponent },
  { path: 'chambres/:slug', component: ChambreDetailComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'infos-pratiques', component: InfosPratiquesComponent },
  { path: 'activites', component: ActivitesComponent },
];
