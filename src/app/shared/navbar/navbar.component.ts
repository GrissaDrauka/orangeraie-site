import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  template: `
    <!-- Overlay sombre -->
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
      (click)="closeMenu()"
    ></div>

    <!-- Navbar principale -->
    <header
      [ngClass]="{
        'bg-[#f9f4ef]/80 backdrop-blur-md shadow-md scale-95 border-b border-orangeraie py-2': isScrolled,
        'bg-[#f9f4ef] scale-100 border-transparent py-4': !isScrolled
      }"
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b"
    >
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center space-x-2 text-orangeraie font-serif font-bold text-xl">
          <img src="assets/logo_orangeraie_petit.png" alt="Logo" class="h-26 w-20" />
          <span>L'Orangeraie</span>
        </a>

        <!-- Bouton burger mobile -->
        <button class="md:hidden text-orangeraie text-3xl" (click)="toggleMenu()">
          <span *ngIf="!isOpen">☰</span>
          <span *ngIf="isOpen">✕</span>
        </button>

        <!-- Menu desktop -->
        <nav class="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          <a routerLink="/" routerLinkActive="text-orangeraie" [routerLinkActiveOptions]="{ exact: true }"
             class="hover:text-orangeraie relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Accueil
          </a>
          <!-- Menu déroulant Nos Hébergements -->
          <div class="relative group">
            <!-- Bouton déclencheur -->
            <button
              class="hover:text-orangeraie relative transition-all duration-300 font-semibold text-sm tracking-wide flex items-center gap-1"
            >
              Nos Hébergements
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Menu déroulant -->
            <div
              class="absolute top-full left-0 bg-white border border-orange-100 rounded-lg shadow z-50 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all duration-300 w-full"
            >
              <a
                routerLink="/chambres"
                routerLinkActive="text-orangeraie"
                [routerLinkActiveOptions]="{ exact: true }"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 transition"
              >
                Nos Chambres
              </a>
              <a
                routerLink="/gite"
                routerLinkActive="text-orangeraie"
                [routerLinkActiveOptions]="{ exact: true }"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 transition"
              >
                Notre Gîte
              </a>
            </div>
          </div>
          <a routerLink="/reservation" routerLinkActive="text-orangeraie" [routerLinkActiveOptions]="{ exact: true }"
              class="hover:text-orangeraie relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Réserver
          </a>
          <a routerLink="/contact" routerLinkActive="text-orangeraie" [routerLinkActiveOptions]="{ exact: true }"
             class="hover:text-orangeraie relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </a>
        </nav>
      </div>
    </header>

    <!-- Menu mobile animé -->
    <div
      *ngIf="true"
      [ngClass]="{
        'scale-y-100 opacity-100': isOpen,
        'scale-y-0 opacity-0 pointer-events-none': !isOpen
      }"
      class="fixed top-16 left-0 w-full z-50 origin-top transition-all duration-300 transform bg-[#f9f4ef]/95 backdrop-blur-md shadow-xl px-4 pb-4 md:hidden"
    >
      <nav class="flex flex-col space-y-3 text-sm font-semibold text-orangeraie tracking-wide mt-2">
        <a routerLink="/" (click)="closeMenu()" class="hover:text-[#7a583f] pl-3 border-l-4 border-transparent hover:border-orangeraie transition-all duration-300">
          Accueil
        </a>
        <!-- Bouton cliquable pour ouvrir/cacher les sous-liens -->
        <button
          (click)="isHebergementsOpen = !isHebergementsOpen"
          class="flex justify-between items-center pl-3 pr-4 py-2 w-full font-bold text-orangeraie hover:text-[#7a583f] border-l-4 border-transparent hover:border-orangeraie transition"
        >
          Nos Hébergements
          <svg
            class="w-4 h-4 transform transition-transform duration-300"
            [ngClass]="{ 'rotate-180': isHebergementsOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Sous-menu affiché uniquement si ouvert -->
        <div *ngIf="isHebergementsOpen" class="pl-6 flex flex-col space-y-1">
          <a
            routerLink="/chambres"
            (click)="closeHebergementsMenu()"
            class="border-l-4 border-transparent hover:border-orangeraie hover:text-[#7a583f] transition pl-3 py-1"
          >
            Nos Chambres
          </a>
          <a
            routerLink="/gite"
            (click)="closeHebergementsMenu()"
            class="border-l-4 border-transparent hover:border-orangeraie hover:text-[#7a583f] transition pl-3 py-1"
          >
            Notre Gîte
          </a>
        </div>
        <a routerLink="/reservation" (click)="closeMenu()" class="hover:text-[#7a583f] pl-3 border-l-4 border-transparent hover:border-orangeraie transition-all duration-300">
            Réserver
          </a>
        <a routerLink="/contact" (click)="closeMenu()" class="hover:text-[#7a583f] pl-3 border-l-4 border-transparent hover:border-orangeraie transition-all duration-300">
          Contact
        </a>
      </nav>
    </div>
  `,
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen = false;
  isScrolled = false;
  isHebergementsOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }

  closeHebergementsMenu() {
    this.isHebergementsOpen = false;
    this.closeMenu();
  }


  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  };

  handleScroll = (): void => {
    this.isScrolled = window.scrollY > 60;
  };

}
