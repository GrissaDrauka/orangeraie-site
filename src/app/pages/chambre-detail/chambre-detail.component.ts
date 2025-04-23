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
}
