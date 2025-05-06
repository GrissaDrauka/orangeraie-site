import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chambre } from '../../models/chambre.model';
import { ChambresService } from '../../services/chambres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chambre-detail',
  templateUrl: './chambre-detail.component.html',
  styleUrls: ['./chambre-detail.component.scss']
})
export class ChambreDetailComponent implements OnInit {

  // Variables pour la chambre
  chambre?: Chambre;
  // Variables pour le zoom des images  
  selectedImageIndex: number = 0;
  showDialog: boolean = false;

  //Liste des icônes lucide
  LUCIDE_ICONS: Record<string, { icon: string; label: string }> = {
    lit: { icon: 'bed', label: 'Lit double' },
    wifi: { icon: 'wifi', label: 'Wifi gratuit' },
    clim: { icon: 'snowflake', label: 'Climatisation' },
    douche: { icon: 'shower-head', label: 'Salle d’eau' },
    tv: { icon: 'tv', label: 'Télévision' },
    wc: { icon: 'toilet', label: 'WC privés' },
    jardin: { icon: 'trees', label: 'Vue jardin' },
    petitdej: { icon: 'coffee', label: 'Petit déjeuner inclus' },
    frigo: { icon: 'fridge', label: 'Réfrigérateur' },
    terrasse: { icon: 'sun', label: 'Terrasse' }
  };

  // Dates de saison, un seul endroit à changer si elles changent
  readonly saisonDates = {
    basse: '30/09 – 01/04',
    moyenne: '01/04 – 14/07, 16/08 – 30/09',
    haute: '14/07 – 16/08'
  };

  constructor(
    private route: ActivatedRoute,
    private chambresSrv: ChambresService,
    public router: Router
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.chambresSrv.getBySlug(slug).subscribe(c => (this.chambre = c));
    }

  }

  openZoom(index: number) {
    this.selectedImageIndex = index;
    this.showDialog = true;
  }

  closeZoom() {
    this.showDialog = false;
  }

  prevImage() {
    if (!this.chambre) return;
    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.chambre.photos.length) %
      this.chambre.photos.length;
  }

  nextImage() {
    if (!this.chambre) return;
    this.selectedImageIndex =
      (this.selectedImageIndex + 1) % this.chambre.photos.length;
  }

  goToImage(index: number) {
    this.selectedImageIndex = index;
  }
}

