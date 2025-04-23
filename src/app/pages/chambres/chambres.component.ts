import { Component } from '@angular/core';

@Component({
  selector: 'app-chambres',
  standalone: false,
  templateUrl: './chambres.component.html'
})
export class ChambresComponent {

  chambresDeux = [
    {
      nom: 'Chambre Marine',
      description: 'Laissez-vous bercer par une atmosphère marine, entre bleu doux et esprit bord de mer.',
      image: 'assets/chambres/chambre_marine.jpg',
      nbPers: '2 pers.',
      tarif: '49€/nuit'
    },
    {
      nom: 'Chambre Nature',
      description: 'Une chambre habillée de fer forgé aux motifs végétaux pour une touche de nature élégante.',
      image: 'assets/chambres/chambre_nature.jpg',
      nbPers: '2 pers.',
      tarif: '49€/nuit'
    },
    {
      nom: 'Chambre Bambouseraie',
      description: 'Une chambre apaisante à l’ambiance zen, inspirée par la douceur des bambous.',
      image: 'assets/chambres/chambre_bambouseraie.jpg',
      nbPers: '2 pers.',
      tarif: '49€/nuit'
    }
  ];

  chambresFamille = [
    {
      nom: 'Chambre l\'Atelier',
      description: 'Une chambre au caractère affirmé, entre bois, métal et esprit atelier, pour un séjour inspiré.',
      image: 'assets/chambres/chambre_atelier.jpg',
      nbPers: '3 pers.',
      tarif: '62€/nuit'
    },
    {
      nom: 'Chambre Coloniale',
      description: 'Une chambre élégante aux accents d’ailleurs, bois foncé, matières naturelles et charme colonial.',
      image: 'assets/chambres/chambre_coloniale.jpg',
      nbPers: '4 pers.',
      tarif: '66€/nuit'
    }
  ];
}
