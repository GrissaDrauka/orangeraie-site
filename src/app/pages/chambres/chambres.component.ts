import { Component } from '@angular/core';
import { ChambresService } from '../../services/chambres.service';
import { Chambre } from '../../models/chambre.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-chambres',
  standalone: false,
  templateUrl: './chambres.component.html'
})
export class ChambresComponent {
  chambresDeux$!: Observable<Chambre[]>;
  chambresFamiliales$!: Observable<Chambre[]>;

  constructor(private chambresSrv: ChambresService) { }

  ngOnInit(): void {
    const all$ = this.chambresSrv.getAllTranslated();
    this.chambresDeux$ = all$.pipe(map(chambres => chambres.filter(c => c.personnes === 2)));
    this.chambresFamiliales$ = all$.pipe(map(chambres => chambres.filter(c => c.personnes > 2)));
  }
}
