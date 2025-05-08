import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gite',
  standalone: false,
  templateUrl: './gite.component.html',
  styleUrls: ['./gite.component.scss']
})
export class GiteComponent {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.get([
      'seo.gite.title',
      'seo.gite.description'
    ]).subscribe(translations => {
      this.titleService.setTitle(translations['seo.gite.title']);
      this.metaService.updateTag({
        name: 'description',
        content: translations['seo.gite.description']
      });
    });
  }

  album = [
    {
      image: 'assets/gite/gite.jpg',
      thumbnail: 'assets/gite/gite.jpg',
      alt: 'Chambre',
      title: 'Chambre'
    },
    {
      image: 'assets/gite/salon.jpg',
      thumbnail: 'assets/gite/salon.jpg',
      alt: 'Salon - Cuisine',
      title: 'Salon - Cuisine'
    },
    {
      image: 'assets/gite/salledebain.jpg',
      thumbnail: 'assets/gite/salledebain.jpg',
      alt: 'Salle de bain',
      title: 'Salle de bain'
    },
    {
      image: 'assets/gite/ext1.jpg',
      thumbnail: 'assets/gite/ext1.jpg',
      alt: 'Extérieur 1',
      title: 'Extérieur 1'
    },
    {
      image: 'assets/gite/ext2.jpg',
      thumbnail: 'assets/gite/ext2.jpg',
      alt: 'Extérieur 2',
      title: 'Extérieur 2'
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  showDialog = false;
  selectedImage: any = null;

  closeZoom() {
    this.showDialog = false;
    document.body.style.overflow = '';
  }

  openZoom(image: any) {
    this.selectedImage = image;
    this.showDialog = true;
  }

  goToImage(image: any) {
    this.selectedImage = image;
  }

  nextImage() {
    const currentIndex = this.album.indexOf(this.selectedImage);
    this.selectedImage = this.album[(currentIndex + 1) % this.album.length];
  }

  prevImage() {
    const currentIndex = this.album.indexOf(this.selectedImage);
    this.selectedImage = this.album[
      (currentIndex - 1 + this.album.length) % this.album.length
    ];
  }

}
