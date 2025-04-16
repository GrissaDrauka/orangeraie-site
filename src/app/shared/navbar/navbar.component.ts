import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="fixed top-0 left-0 w-full bg-[#f9f4ef] z-50 shadow transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center space-x-2 text-orangeraie font-serif font-bold text-xl">
          <img src="assets/logo.png" alt="Logo" class="h-8 w-8" />
          <span>L'Orangeraie</span>
        </a>

        <!-- Burger menu (mobile only) -->
        <button class="md:hidden text-orangeraie text-3xl" (click)="toggleMenu()">
          <span *ngIf="!isOpen">☰</span>
          <span *ngIf="isOpen">✕</span>
        </button>

        <!-- Menu desktop -->
        <nav class="hidden md:flex space-x-6 text-sm font-semibold tracking-wide">
          <a routerLink="/" routerLinkActive="text-orangeraie"
            class="hover:text-orangeraie transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Accueil
          </a>
          <a routerLink="/chambres" routerLinkActive="text-orangeraie"
            class="hover:text-orangeraie transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Nos Chambres
          </a>
          <a routerLink="/gite" routerLinkActive="text-orangeraie"
            class="hover:text-orangeraie transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Notre Gîte
          </a>
          <a routerLink="/contact" routerLinkActive="text-orangeraie"
            class="hover:text-orangeraie transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orangeraie after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </a>
        </nav>
      </div>

      <!-- Menu mobile -->
      <div *ngIf="isOpen" class="md:hidden px-4 pb-4">
        <nav class="flex flex-col space-y-3 text-sm font-semibold text-orangeraie tracking-wide mt-2">
          <a routerLink="/" (click)="closeMenu()" class="hover:text-[#7a583f]">Accueil</a>
          <a routerLink="/chambres" (click)="closeMenu()" class="hover:text-[#7a583f]">Nos Chambres</a>
          <a routerLink="/gite" (click)="closeMenu()" class="hover:text-[#7a583f]">Notre Gîte</a>
          <a routerLink="/contact" (click)="closeMenu()" class="hover:text-[#7a583f]">Contact</a>
        </nav>
      </div>
    </header>
  `
})
export class NavbarComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
}
