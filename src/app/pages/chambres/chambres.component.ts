import { Component } from '@angular/core';
import { ChambresService } from '../../services/chambres.service';
import { Chambre } from '../../models/chambre.model';

@Component({
  selector: 'app-chambres',
  standalone: false,
  templateUrl: './chambres.component.html'
})
export class ChambresComponent {
  chambresDeux: Chambre[] = [];
  chambresFamiliales: Chambre[] = [];

  constructor(private chambresSrv: ChambresService) { }

  ngOnInit(): void {
    this.chambresSrv.getChambresDeux().subscribe(data => (this.chambresDeux = data));
    this.chambresSrv.getChambresFamiliales().subscribe(data => (this.chambresFamiliales = data));
  }
}
