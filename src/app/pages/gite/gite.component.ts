import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gite',
  imports: [CommonModule],
  templateUrl: './gite.component.html'
})

export class GiteComponent {
  img = [
    {
      src: 'assets/gite1.jpg',
      thumb: 'assets/gite1.jpg',
      caption: 'Salon du gîte'
    },
    {
      src: 'assets/gite2.jpg',
      thumb: 'assets/gite2.jpg',
      caption: 'Cuisine équipée'
    },
    {
      src: 'assets/gite3.jpg',
      thumb: 'assets/gite3.jpg',
      caption: 'Chambre spacieuse'
    }
  ];
}
