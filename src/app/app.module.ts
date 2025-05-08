import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LucideAngularModule, icons } from 'lucide-angular';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { routes } from './app.routes';
import { ActivitesComponent } from './pages/activites/activites.component';
import { ChambreDetailComponent } from './pages/chambre-detail/chambre-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GiteModule } from './pages/gite/gite.module';
import { HomeComponent } from './pages/home/home.component';
import { InfosPratiquesComponent } from './pages/infos-pratiques/infos-pratiques.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
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
        RouterModule.forRoot(routes),
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
