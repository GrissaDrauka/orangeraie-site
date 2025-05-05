import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chambre } from '../../models/chambre.model';
import { ChambresService } from '../../services/chambres.service';

@Component({
  selector: 'app-chambre-detail',
  templateUrl: './chambre-detail.component.html',
  styleUrls: ['./chambre-detail.component.scss']
})
export class ChambreDetailComponent implements OnInit {

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

  chambre?: Chambre;

  constructor(
    private route: ActivatedRoute,
    private chambresSrv: ChambresService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.chambresSrv.getBySlug(slug).subscribe(c => (this.chambre = c));
    }

  }

  getWidgetSuffixForSlug(slug: string): string | null {
    const mapping: Record<string, string> = {
      'chambre-coloniale': '61770-1',
      'chambre-atelier': '61770-4',
      'chambre-bambouseraie': '61770-6',
      'chambre-nature': '61770-5',
      'chambre-marin': '61770-7',
    };
    return mapping[slug] || null;
  }
}

