import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
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
export class AppComponent { }
