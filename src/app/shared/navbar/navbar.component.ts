import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Overlay sombre -->
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
      (click)="closeMenu()"
    ></div>

    <!-- Navbar principale -->
    <header class="fixed top-0 left-0 w-full bg-[#f9f4ef] z-50 shadow transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center space-x-2 text-orangeraie font-serif font-bold text-xl">
          <img src="assets/logo.png" alt="Logo" class="h-8 w-8" />
          <span>L'Orangeraie</span>
        </a>

        <!-- Bouton burger mobile -->
        <button class="md:hidden text-orangeraie text-3xl" (click)="toggleMenu()">
          <span *ngIf="!isOpen">☰</span>
          <span *ngIf="isOpen">✕</span>
        </button>

        <!-- Menu desktop -->
        <nav class="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          <a routerLink="/" routerLinkActive="text-orangeraie"
             class="hover:text-orangeraie relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Accueil
          </a>
          <a routerLink="/chambres" routerLinkActive="text-orangeraie"
             class="hover:text-orangeraie relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Nos Chambres
          </a>
          <a routerLink="/gite" routerLinkActive="text-orangeraie"
             class="hover:text-orangeraie relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Notre Gîte
          </a>
          <a routerLink="/contact" routerLinkActive="text-orangeraie"
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
        <a routerLink="/chambres" (click)="closeMenu()" class="hover:text-[#7a583f] pl-3 border-l-4 border-transparent hover:border-orangeraie transition-all duration-300">
          Nos Chambres
        </a>
        <a routerLink="/gite" (click)="closeMenu()" class="hover:text-[#7a583f] pl-3 border-l-4 border-transparent hover:border-orangeraie transition-all duration-300">
          Notre Gîte
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

  toggleMenu() {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  };
}
