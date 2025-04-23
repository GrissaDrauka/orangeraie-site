import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CHAMBRES_DATA } from '../../data/chambres.data';

@Component({
  selector: 'app-chambre-detail',
  templateUrl: './chambre-detail.component.html',
  styleUrls: ['./chambre-detail.component.scss']
})
export class ChambreDetailComponent implements OnInit {
  chambre: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.chambre = CHAMBRES_DATA.find(c => c.id === slug);
  }

}
