import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
  <div class="min-h-screen flex flex-col">
    <app-navbar></app-navbar>

    <main class="flex-grow">
      <router-outlet>
        <!-- Bouton flottant pour mobile -->
        <a routerLink="/reservation"
         class="md:hidden fixed bottom-6 right-6 bg-orangeraie text-white text-sm font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-[#7a583f] transition z-50">
            📝 Réserver
          </a>
      </router-outlet>
    </main>

    <app-footer></app-footer>
  </div>
  `
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr'); // langue par défaut
    this.translate.use('fr');            // langue active au démarrage
  }

  switchLang(lang: string) {
    this.translate.use(lang);           // change la langue dynamiquement
  }

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang') || 'fr'; // par défaut français
    this.switchLang(savedLang);
  }
}
