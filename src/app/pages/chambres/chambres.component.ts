import { Component } from '@angular/core';
import { ChambresService } from '../../services/chambres.service';
import { Chambre } from '../../models/chambre.model';
import { Observable, map } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chambres',
  standalone: false,
  templateUrl: './chambres.component.html'
})
export class ChambresComponent {
  chambresDeux$!: Observable<Chambre[]>;
  chambresFamiliales$!: Observable<Chambre[]>;

  constructor(private chambresSrv: ChambresService,
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.get([
      'seo.chambres.title',
      'seo.chambres.description'
    ]).subscribe(translations => {
      this.titleService.setTitle(translations['seo.chambres.title']);
      this.metaService.updateTag({
        name: 'description',
        content: translations['seo.chambres.description']
      });
    });
    const all$ = this.chambresSrv.getAllTranslated();
    this.chambresDeux$ = all$.pipe(map(chambres => chambres.filter(c => c.personnes === 2)));
    this.chambresFamiliales$ = all$.pipe(map(chambres => chambres.filter(c => c.personnes > 2)));
  }
}
