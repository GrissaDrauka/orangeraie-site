import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { GiteComponent } from './pages/gite/gite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        ChambresComponent,
        GiteComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
