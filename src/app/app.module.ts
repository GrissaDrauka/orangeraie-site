import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiteModule } from './pages/gite/gite.module';
import { ContactComponent } from './pages/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { ChambreDetailComponent } from './pages/chambre-detail/chambre-detail.component';
import { GalleriaModule } from 'primeng/galleria';
import { LucideAngularModule, icons } from 'lucide-angular';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { DialogModule } from 'primeng/dialog';
import { InfosPratiquesComponent } from './pages/infos-pratiques/infos-pratiques.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        ChambresComponent,
        ContactComponent,
        ChambreDetailComponent,
        ReservationComponent,
        InfosPratiquesComponent,
        ActivitesComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GiteModule,
        MatIconModule,
        GalleriaModule,
        DialogModule,
        LucideAngularModule.pick(icons),
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled'
        }),
        // Import des module pour traduction
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'fr',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
