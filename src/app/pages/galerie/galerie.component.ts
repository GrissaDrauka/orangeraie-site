import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})

export class GalerieComponent {
  photos = [
    {
      src: 'assets/commun/entree1.jpg',
      alt: 'Vue de l\'entree 1'
    },
    {
      src: 'assets/commun/entree2.jpg',
      alt: 'Vue de l\'entree 2'
    },
    {
      src: 'assets/commun/salon1.jpg',
      alt: 'Vue du salon 1'
    },
    {
      src: 'assets/commun/salon2.jpg',
      alt: 'Vue du salon 2'
    },
    {
      src: 'assets/commun/salon3.jpg',
      alt: 'Vue du salon 3'
    },
    {
      src: 'assets/commun/tv1.jpg',
      alt: 'Vue du salon TV 1'
    },
    {
      src: 'assets/commun/tv2.jpg',
      alt: 'Vue du salon TV 2'
    },
    {
      src: 'assets/commun/petit_dej.jpg',
      alt: 'Vue du petit déjeuner'
    },
    {
      src: 'assets/commun/home.jpg',
      alt: 'Vue de la maison'
    },
    {
      src: 'assets/commun/exte.jpg',
      alt: 'Vue du jardin'
    },
    {
      src: 'assets/commun/salon_exte.jpg',
      alt: 'Vue du salon exterieur'
    },
    {
      src: 'assets/commun/billard.jpg',
      alt: 'Vue du billard'
    }
  ];

  selectedPhoto: { src: string; alt: string } | null = null;
  showDialog = false;

  openZoom(photo: { src: string; alt: string }) {
    this.selectedPhoto = photo;
    this.showDialog = true;
  }

  closeZoom() {
    this.showDialog = false;
  }
}
