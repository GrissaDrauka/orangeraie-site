import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
     <!-- Hero Section -->
     <section
        class="relative w-full bg-black/50 text-white text-center px-4 pt-24 sm:pt-28 pb-16 flex flex-col items-center justify-center min-h-[80vh] bg-cover bg-center"
        style="background-image: url('assets/maison-hotes.png');"
      >
        <h1 class="text-4xl sm:text-5xl font-bold font-playfair mb-4">Chambres d'hôtes</h1>
        <p class="text-base sm:text-lg max-w-2xl mb-6 font-sans">
          Laurence & Fabrice vous accueillent dans leur maison d'hôtes et vous souhaitent la bienvenue.
        </p>

        <!-- Labels -->
        <div class="flex flex-wrap gap-3 justify-center mb-6">
          <div class="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow flex items-center space-x-2">
            <img src="assets/clevacances.png" alt="Clévacances" class="h-6" />
            <span class="text-sm text-orangeraie font-semibold font-sans">Clévacances</span>
          </div>
          <div class="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow flex items-center space-x-2">
            <img src="assets/accueil-velo.png" alt="Accueil Vélo" class="h-6" />
            <span class="text-sm text-orangeraie font-semibold font-sans">Accueil Vélo</span>
          </div>
          <div class="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow flex items-center space-x-2">
            <img src="assets/vignobles.png" alt="Vignobles & Découvertes" class="h-6" />
            <span class="text-sm text-orangeraie font-semibold font-sans">Vignobles & Découvertes</span>
          </div>
        </div>

        <!-- Boutons réservation -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+33468822279"
            class="bg-orangeraie text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#7a583f] transition text-sm sm:text-base"
          >
            📞 Réserver par téléphone
          </a>
          <a
            routerLink="/reservation"
            class="bg-orangeraie text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a583f] transition text-sm sm:text-base cursor-pointer"
          >
            📝 Réserver en ligne
          </a>
        </div>
      </section>


    <!-- Section Nos chambres -->
    <section class="bg-[#f9f4ef] py-16 px-4 md:px-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-orangeraie text-center mb-12">
          Nos chambres
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Chambre 1 -->
          <div class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <img src="assets/chambres/chambre_nature.jpg" alt="Chambre Nature" class="h-56 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-serif font-semibold text-orangeraie mb-2">Chambre Nature</h3>
              <p class="text-gray-700 text-sm font-sans">
                Chambre double avec salle d’eau privative, climatisation et TV. Idéale pour un séjour à deux.
              </p>
            </div>
          </div>

          <!-- Chambre 2 -->
          <div class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <img src="assets/chambres/chambre_atelier.jpg" alt="Chambre triple" class="h-56 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-serif font-semibold text-orangeraie mb-2">Chambre Atelier</h3>
              <p class="text-gray-700 text-sm font-sans">
                Chambre triple spacieuse avec lit double et lit simple. Idéale pour petit groupe ou famille.
              </p>
            </div>
          </div>

          <!-- Chambre 3 -->
          <div class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <img src="assets/chambres/chambre_coloniale.jpg" alt="Suite familiale" class="h-56 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-serif font-semibold text-orangeraie mb-2">Suite Familiale "Coloniale"</h3>
              <p class="text-gray-700 text-sm font-sans">
                Suite communicante pour 4 personnes avec deux chambres, idéale pour les séjours en famille.
              </p>
            </div>
          </div>
        </div>

        <!-- Bouton vers la page dédiée -->
        <div class="text-center mt-12">
          <a routerLink="/chambres" class="bg-orangeraie text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a583f] transition cursor-pointer">
            Voir toutes les chambres
          </a>
        </div>
      </div>
    </section>

    <!-- Section Contact teaser -->
    <section class="bg-white py-12 px-4 md:px-16">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-2xl font-serif font-bold text-orangeraie mb-4">Une question sur nos chambres ?</h3>
        <p class="text-gray-700 font-sans mb-6">
          N’hésitez pas à nous contacter, nous répondons rapidement et avec plaisir.
        </p>
        <a routerLink="/contact"
          class="inline-block bg-orangeraie text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a583f] transition cursor-pointer">
          Nous contacter
        </a>
      </div>
    </section>

    <!-- Section Notre Gîte -->
    <section class="bg-[#f9f4ef] py-16 px-4 md:px-16">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Image du gîte -->
        <div>
          <img src="assets/gite.jpg" alt="Notre gîte" class="w-full h-auto rounded-2xl shadow" />
        </div>

        <!-- Texte -->
        <div>
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-orangeraie mb-6 text-center">
            Notre Gîte
          </h2>
          <p class="text-gray-700 text-base font-sans mb-6">
            Découvrez notre gîte indépendant, confortable et parfaitement équipé pour accueillir couples, familles ou groupes d’amis. Situé au calme, avec terrasse et vue sur le jardin, c’est le lieu idéal pour un séjour prolongé dans les Pyrénées-Orientales.
          </p>
          <div class="text-center">
            <a routerLink="/gite" class="inline-block bg-orangeraie text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a583f] transition cursor-pointer">
              En savoir plus
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- Section Services & Commodités -->
    <section class="bg-white py-16 px-4 md:px-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-orangeraie text-center mb-12">
          Services & commodités
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <!-- Service 1 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="bg-orangeraie text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow">
              🛏️
            </div>
            <h4 class="font-serif font-semibold text-orangeraie text-lg">Literie confortable</h4>
            <p class="text-gray-600 text-sm font-sans">Linge fourni, lits faits à l’arrivée</p>
          </div>

          <!-- Service 2 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="bg-orangeraie text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow">
              🍽️
            </div>
            <h4 class="font-serif font-semibold text-orangeraie text-lg">Petit-déjeuner</h4>
            <p class="text-gray-600 text-sm font-sans">Produits frais, locaux & maison</p>
          </div>

          <!-- Service 3 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="bg-orangeraie text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow">
              🌐
            </div>
            <h4 class="font-serif font-semibold text-orangeraie text-lg">Wi-Fi gratuit</h4>
            <p class="text-gray-600 text-sm font-sans">Disponible dans toutes les chambres</p>
          </div>

          <!-- Service 4 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="bg-orangeraie text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow">
              🚗
            </div>
            <h4 class="font-serif font-semibold text-orangeraie text-lg">Parking privé</h4>
            <p class="text-gray-600 text-sm font-sans">Gratuit et sécurisé sur place (accès limité)</p>
          </div>

          <!-- Service 5 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="bg-orangeraie text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow">
              ❄️
            </div>
            <h4 class="font-serif font-semibold text-orangeraie text-lg">Climatisation</h4>
            <p class="text-gray-600 text-sm font-sans">Chambres fraîches en été</p>
          </div>

          <!-- Service 6 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="bg-orangeraie text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow">
              🚲
            </div>
            <h4 class="font-serif font-semibold text-orangeraie text-lg">Garage à vélos</h4>
            <p class="text-gray-600 text-sm font-sans">Espace sécurisé pour deux-roues</p>
          </div>
        </div>
      </div>
    </section>

     <!-- Essai 2 pour les services et commodités -->
     <section class="bg-[#f9f4ef] py-12 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-orangeraie mb-6">Infos pratiques</h2>
        
        <div class="grid gap-6 sm:grid-cols-2 text-left text-sm text-gray-700 font-sans">
          <div>
            <h3 class="font-semibold text-orangeraie mb-2">🍽️ Petit déjeuner</h3>
            <p>
              Petit déjeuner à la française avec café, thé, chocolat, viennoiseries, pain, yaourt, jus d’orange
              et nos <strong>10 confitures maison</strong>, servi dans le jardin ou la salle à manger.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-orangeraie mb-2">🕒 Arrivées & Départs</h3>
            <p>
              Accueil à partir de <strong>17h30</strong>. Les chambres doivent être libérées à <strong>10h</strong>.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-orangeraie mb-2">💳 Moyens de paiement</h3>
            <p>
              Chèques, espèces, <strong>chèques vacances ANCV</strong> et <strong>chèques vacances connect</strong>.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-orangeraie mb-2">📍 Autres services</h3>
            <ul class="list-disc list-inside">
              <li>Patio et jardin avec mobilier</li>
              <li>Cuisine d'été équipée</li>
              <li>Réfrigérateurs en libre service</li>
              <li>Sèche-cheveux sur demande</li>
            </ul>
          </div>
        </div>

        <div class="mt-8">
          <a routerLink="/infos-pratiques"
            class="inline-block bg-orangeraie text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a583f] transition text-sm sm:text-base">
            ➕ Tout savoir
          </a>
        </div>
      </div>
    </section>

     <!-- Section À découvrir autour -->
     <section class="bg-white py-16 px-4 md:px-16">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-orangeraie mb-12">
          À découvrir autour
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">

          <!-- Activité 1 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="text-4xl">🏖️</div>
            <h4 class="text-lg font-serif font-semibold text-orangeraie">Les plages</h4>
            <p class="text-sm text-gray-600 font-sans">À seulement 10 min, profitez du sable fin et de la Méditerranée.</p>
          </div>

          <!-- Activité 2 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="text-4xl">🏰</div>
            <h4 class="text-lg font-serif font-semibold text-orangeraie">Collioure</h4>
            <p class="text-sm text-gray-600 font-sans">Le joyau de la côte vermeille, ses ruelles colorées & son port mythique.</p>
          </div>

          <!-- Activité 3 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="text-4xl">🚴</div>
            <h4 class="text-lg font-serif font-semibold text-orangeraie">Balades à vélo</h4>
            <p class="text-sm text-gray-600 font-sans">Nombreux itinéraires cyclables entre mer et montagne.</p>
          </div>

          <!-- Activité 4 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="text-4xl">🌄</div>
            <h4 class="text-lg font-serif font-semibold text-orangeraie">Les Albères</h4>
            <p class="text-sm text-gray-600 font-sans">Randonnées et vues imprenables sur le littoral méditerranéen.</p>
          </div>

          <!-- Activité 5 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="text-4xl">🍇</div>
            <h4 class="text-lg font-serif font-semibold text-orangeraie">Vignobles</h4>
            <p class="text-sm text-gray-600 font-sans">Visites de domaines viticoles, dégustations de vins locaux.</p>
          </div>

          <!-- Activité 6 -->
          <div class="flex flex-col items-center space-y-4">
            <div class="text-4xl">🛍️</div>
            <h4 class="text-lg font-serif font-semibold text-orangeraie">Marché d'Elne</h4>
            <p class="text-sm text-gray-600 font-sans">Produits locaux, ambiance catalane, tous les mercredis matin.</p>
          </div>

        </div>

        <div class="mt-12">
          <a routerLink="/activites" class="bg-orangeraie text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a583f] transition cursor-pointer">
            Découvrir la région
          </a>
        </div>
      </div>
    </section>

    <!-- Section Contactez-nous -->
    <!--<section class="bg-white py-16 px-4 md:px-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-orangeraie mb-6">
          Contactez-nous
        </h2>
        <p class="text-gray-700 font-sans text-base mb-6">
          Vous avez une question ? Besoin d'informations ou envie de réserver votre séjour ?
          Nous sommes à votre disposition et serons ravis de vous accueillir à L'Orangeraie.
        </p>

        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 text-orangeraie font-semibold text-sm font-sans mb-8">
          <div class="flex items-center gap-2">
            📞 <a href="tel:+33468822279" class="hover:underline">+33(0)4 68 82 22 79</a>
          </div>
          <div class="flex items-center gap-2">
            📧 <a href="mailto:contact@orangeraie-elne.fr" class="hover:underline">contact&#64;orangeraie-elne.fr</a>
          </div>
        </div>

        <a routerLink="/contact"
          class="inline-block bg-orangeraie text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7a583f] transition cursor-pointer">
          Nous écrire
        </a>
      </div>
    </section>-->

  `
})
export class HomeComponent { }
