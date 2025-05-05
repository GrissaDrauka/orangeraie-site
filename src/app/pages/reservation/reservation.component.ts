import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const script1 = document.createElement('script');
    script1.src = '//gadget.open-system.fr/widgets-libs/rel/noyau-1.0.min.js';
    script1.type = 'text/javascript';
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.text = `
        (function() {
          var widgetProduit = AllianceReseaux.Widget.Instance("Produit", {
            idPanier: "pImkpKQ",
            idIntegration: 1185,
            langue: "fr",
            ui: "OSCH-61770"
          });
          widgetProduit.PreApp("planning.actif", true);
          widgetProduit.PreApp("planning.nbMaxProduits", 100);
          widgetProduit.Initialise();
        })();
      `;
      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);
  }
}