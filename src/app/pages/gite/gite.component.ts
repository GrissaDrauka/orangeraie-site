import { Component } from '@angular/core';

@Component({
  selector: 'app-gite',
  standalone: false,
  templateUrl: './gite.component.html',
  styleUrls: ['./gite.component.scss']
})
export class GiteComponent {

  album = [
    {
      image: 'assets/chambres/chambre_marine.jpg',
      thumbnail: 'assets/chambres/chambre_marine.jpg',
      alt: 'Photo 1',
      title: 'Salon'
    },
    {
      image: 'assets/chambres/chambre_bambouseraie.jpg',
      thumbnail: 'assets/chambres/chambre_bambouseraie.jpg',
      alt: 'Photo 2',
      title: 'Cuisine'
    },
    {
      image: 'assets/chambres/chambre_atelier.jpg',
      thumbnail: 'assets/chambres/chambre_atelier.jpg',
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
