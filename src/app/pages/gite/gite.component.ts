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
      image: 'assets/chambres/MARINE/recto.jpg',
      thumbnail: 'assets/chambres/MARINE/recto.jpg',
      alt: 'Photo 1',
      title: 'Salon'
    },
    {
      image: 'assets/chambres/BAMBOUSERAIE/recto.jpg',
      thumbnail: 'assets/chambres/BAMBOUSERAIE/recto.jpg',
      alt: 'Photo 2',
      title: 'Cuisine'
    },
    {
      image: 'assets/chambres/ATELIER/recto.jpg',
      thumbnail: 'assets/chambres/ATELIER/recto.jpg',
      alt: 'Photo 3',
      title: 'Chambre'
    }
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
