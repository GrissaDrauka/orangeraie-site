import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Charge le script de base
    const scriptCore = document.createElement('script');
    scriptCore.src = '//gadget.open-system.fr/widgets-libs/rel/noyau-1.0.min.js';
    scriptCore.async = true;
    scriptCore.onload = () => this.initialiseWidget();
    document.body.appendChild(scriptCore);
  }

  private initialiseWidget(): void {
    const scriptInit = document.createElement('script');
    scriptInit.type = 'text/javascript';
    scriptInit.text = `
      (function() {
        var widgetProduit = AllianceReseaux.Widget.Instance("Produit", {
          idPanier: "pImkpKQ",
          idIntegration: 1185,
          langue: "fr",
          ui: "OSCH-61770"
        });
        widgetProduit.Initialise();
      })();
    `;
    document.body.appendChild(scriptInit);
  }
}