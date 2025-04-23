import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
  <div class="min-h-screen flex flex-col">
    <app-navbar></app-navbar>

    <main class="flex-grow">
      <router-outlet>
        <!-- Bouton flottant pour mobile -->
        <a href="tel:+33468822279"
          class="md:hidden fixed bottom-6 right-6 bg-orangeraie text-white text-sm font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-[#7a583f] transition z-50">
          📞 Réserver
        </a>
      </router-outlet>
    </main>

    <app-footer></app-footer>
  </div>
  `
})
export class AppComponent { }
