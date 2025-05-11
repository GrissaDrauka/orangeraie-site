import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent {
  photos = [
    { src: 'assets/commun/entree1.webp', alt: "Vue de l'entrée 1" },
    { src: 'assets/commun/entree2.webp', alt: "Vue de l'entrée 2" },
    { src: 'assets/commun/salon1.webp', alt: "Vue du salon 1" },
    { src: 'assets/commun/salon2.webp', alt: "Vue du salon 2" },
    { src: 'assets/commun/salon3.webp', alt: "Vue du salon 3" },
    { src: 'assets/commun/tv1.webp', alt: "Vue du salon TV 1" },
    { src: 'assets/commun/tv2.webp', alt: "Vue du salon TV 2" },
    { src: 'assets/commun/petit_dej.webp', alt: "Vue du petit déjeuner" },
    { src: 'assets/commun/home.webp', alt: "Vue de la maison" },
    { src: 'assets/commun/exte.webp', alt: "Vue du jardin" },
    { src: 'assets/commun/salon_exte.webp', alt: "Vue du salon extérieur" },
    { src: 'assets/commun/billard.webp', alt: "Vue du billard" }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private translate: TranslateService
  ) { }

  selectedIndex = 0;
  showDialog = false;

  openZoom(photo: { src: string; alt: string }, index: number) {
    this.selectedIndex = index;
    this.showDialog = true;
  }

  closeZoom() {
    this.showDialog = false;
  }

  prevImage() {
    this.selectedIndex = (this.selectedIndex - 1 + this.photos.length) % this.photos.length;
  }

  nextImage() {
    this.selectedIndex = (this.selectedIndex + 1) % this.photos.length;
  }

  goToImage(index: number) {
    this.selectedIndex = index;
  }

  handleKeydown = (event: KeyboardEvent) => {
    if (!this.showDialog) return;
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'ArrowRight') this.nextImage();
  };

  ngOnInit(): void {
    window.addEventListener('keydown', this.handleKeydown);
    this.translate.get(['seo.gallery.title', 'seo.gallery.description'])
      .subscribe(translations => {
        this.title.setTitle(translations['seo.gallery.title']);
        this.meta.updateTag({
          name: 'description',
          content: translations['seo.gallery.description']
        });
      });
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.handleKeydown);
  }
}
