import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from '../../models/chambre.model';
import { ChambresService } from '../../services/chambres.service';
import { Observable, tap, take } from 'rxjs';

@Component({
  selector: 'app-chambre-detail',
  templateUrl: './chambre-detail.component.html',
  styleUrls: ['./chambre-detail.component.scss']
})
export class ChambreDetailComponent implements OnInit {

  // Variables pour la chambre
  chambre$!: Observable<Chambre | undefined>;
  // Variables pour le zoom des images  
  selectedImageIndex: number = 0;
  showDialog: boolean = false;

  //Liste des icônes lucide
  LUCIDE_ICONS: Record<string, { icon: string; labelKey: string }> = {
    lit: { icon: 'bed', labelKey: 'chambres.equipements.lit' },
    wifi: { icon: 'wifi', labelKey: 'chambres.equipements.wifi' },
    clim: { icon: 'snowflake', labelKey: 'chambres.equipements.clim' },
    douche: { icon: 'shower-head', labelKey: 'chambres.equipements.douche' },
    tv: { icon: 'tv', labelKey: 'chambres.equipements.tv' },
    wc: { icon: 'toilet', labelKey: 'chambres.equipements.wc' },
    jardin: { icon: 'trees', labelKey: 'chambres.equipements.jardin' },
    petitdej: { icon: 'coffee', labelKey: 'chambres.equipements.petitdej' },
    frigo: { icon: 'fridge', labelKey: 'chambres.equipements.frigo' },
    terrasse: { icon: 'sun', labelKey: 'chambres.equipements.terrasse' }
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
      this.chambre$ = this.chambresSrv.getBySlug(slug);
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
    this.chambre$.pipe(take(1)).subscribe(chambre => {
      if (!chambre) return;
      this.selectedImageIndex =
        (this.selectedImageIndex - 1 + chambre.photos.length) % chambre.photos.length;
    });
  }

  nextImage() {
    this.chambre$.pipe(take(1)).subscribe(chambre => {
      if (!chambre) return;
      this.selectedImageIndex =
        (this.selectedImageIndex - 1 + chambre.photos.length) % chambre.photos.length;
    });
  }

  goToImage(index: number) {
    this.selectedImageIndex = index;
  }
}

