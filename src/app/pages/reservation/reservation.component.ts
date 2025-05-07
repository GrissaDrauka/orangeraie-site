import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements AfterViewInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event) => {
      this.updateWidgetLanguage(event.lang);
    });
  }

  ngOnInit(): void {
    this.translate.get(['seo.reservation.title', 'seo.reservation.description'])
      .subscribe(translations => {
        this.titleService.setTitle(translations['seo.reservation.title']);
        this.metaService.updateTag({ name: 'description', content: translations['seo.reservation.description'] });
      });
  }

  ngAfterViewInit(): void {
    // Charge le script de base
    const scriptCore = document.createElement('script');
    scriptCore.src = '//gadget.open-system.fr/widgets-libs/rel/noyau-1.0.min.js';
    scriptCore.async = true;
    scriptCore.onload = () => this.initialiseWidget();
    document.body.appendChild(scriptCore);
  }

  private initialiseWidget(): void {
    const script = document.createElement('script');
    script.src = '//gadget.open-system.fr/widgets-libs/rel/noyau-1.0.min.js';
    script.onload = () => {
      const widget = (window as any).AllianceReseaux.Widget.Instance('Produit', {
        idPanier: 'pImkpKQ',
        idIntegration: 1185,
        langue: this.translate.currentLang === 'fr' ? 'fr' : 'uk',
        ui: 'OSCH-61770'
      });

      widget.PreApp('planning.actif', true);
      widget.PreApp('planning.nbMaxProduits', 100);
      widget.Initialise();
    };
    document.body.appendChild(script);
  }

  private updateWidgetLanguage(lang: string): void {
    const widget = (window as any).AllianceReseaux.Widget.Instance('Produit', {
      idPanier: 'pImkpKQ',
      idIntegration: 1185,
      langue: lang === 'fr' ? 'fr' : 'uk',
      ui: 'OSCH-61770'
    });

    widget.PreApp('planning.actif', true);
    widget.PreApp('planning.nbMaxProduits', 100);
    widget.Initialise();
  }
}