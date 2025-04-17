import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
  
  <!--<div class="min-h-screen bg-[#E6D9BC]">-->
    <app-navbar></app-navbar>
    <router-outlet>
      <!-- Bouton flottant pour mobile -->
      <a href="tel:+33468822279"
        class="md:hidden fixed bottom-6 right-6 bg-orangeraie text-white text-sm font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-[#7a583f] transition z-50">
        📞 Réserver
      </a>
    </router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent {
}
