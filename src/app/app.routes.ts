import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { GiteComponent } from './pages/gite/gite.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ChambreDetailComponent } from './pages/chambre-detail/chambre-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chambres', component: ChambresComponent },
  { path: 'gite', component: GiteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chambres/:slug', component: ChambreDetailComponent }
];
