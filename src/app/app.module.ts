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

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        ChambresComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GiteModule,
        MatIconModule,
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled'
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
