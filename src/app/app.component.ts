import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
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

    <!-- Footer -->
    <footer class="bg-[#f9f4ef] text-gray-700 py-10 px-4 md:px-16 mt-16">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        <!-- Nom / logo -->
        <div>
          <h3 class="text-xl font-serif font-bold text-orangeraie mb-3">L'Orangeraie</h3>
          <p class="text-gray-600">Chambres d’hôtes & Gîte à Elne</p>
        </div>

        <!-- Navigation -->
        <div class="space-y-2">
          <h4 class="font-semibold text-orangeraie">Navigation</h4>
          <ul class="space-y-1">
            <li><a routerLink="/" class="hover:underline">Accueil</a></li>
            <li><a routerLink="/chambres" class="hover:underline">Nos chambres</a></li>
            <li><a routerLink="/gite" class="hover:underline">Notre gîte</a></li>
            <li><a routerLink="/contact" class="hover:underline">Contact</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-2">
          <h4 class="font-semibold text-orangeraie">Contact</h4>
          <p>
        📍 <a href="https://www.google.com/maps?q=29+Avenue+Paul+Reig,+66200+Elne"
              target="_blank" rel="noopener noreferrer"
              class="hover:underline">
                29 Avenue Paul Reig, 66200 Elne
            </a>
          </p>
          <p>📞 <a href="tel:+33468822279" class="hover:underline">+33(0)4 68 82 22 79</a></p>
          <p>📧 <a href="mailto:contact@orangeraie-elne.fr" class="hover:underline">contact&#64;orangeraie-elne.fr</a></p>
        </div>
      </div>

      <!-- Mentions -->
      <div class="text-center text-xs text-gray-500 mt-10">
        &copy; {{ currentYear }} L'Orangeraie — Tous droits réservés.
      </div>
    </footer>

<!--</div> -->
  `
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();
}
