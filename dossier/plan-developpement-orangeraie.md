
# 📌 Plan de Développement du Site "L'Orangeraie"

## ✅ Fonctionnalités déjà en place

### 🌐 Structure & Navigation
- Navbar sticky (transparent/floutée → couleur au scroll)
- Navigation responsive (desktop + mobile)
- Scroll auto vers le haut à chaque changement de page
- Début d'optimisation des composants Angular (footer extrait, structure des dossiers, etc.)

### 🛏️ Pages créées
- **Accueil**
  - Introduction + Services
  - Bloc “Services et commodités” + “Infos pratiques”
- **Nos Chambres**
  - Séparation chambres 2 pers. / familles
  - Cartes avec badge “nb de pers.”, description, bouton “En savoir plus”
- **Notre Gîte**
  - Carousel (PrimeNG Galleria)
  - Zoom dans une modale avec fond, navigation, miniatures
  - Présentation + équipements
  - CTA réservation
- **Scroll top automatique** ajouté à chaque navigation

### ☁️ Déploiement
- Angular 16 (Webpack)
- Déploiement GitHub Pages OK
- Déploiement final prévu sur **OVH** :
  - nom de domaine déjà existant
  - build avec `ng build --base-href ./`
  - FTP vers `/www`
  - redirection via `.htaccess`

## 🔜 Plan de Développement (en cours)

### 🛎️ Étapes principales
1. ✅ Page “Notre Gîte”
2. 🔄 Finaliser la **page “Nos Chambres”**
   - Ajouter pages individuelles pour chaque chambre (avec infos complètes)
   - Intégrer les tarifs dans chaque fiche
3. 🔧 **Page “Infos Pratiques”**
   - Avec toutes les infos du bloc donné (horaires, petit-déj, équipements partagés…)
   - Ajouter aussi les **tables d’hôtes**
   - Affichée sur la home aussi (après services & commodités)
4. 📍 **Page “Contact”**
   - Formulaire fonctionnel
   - Carte Google Maps
   - Coordonnées
5. 📅 **Page “Réservation”**
   - Intégration du widget OpenPro (comme sur l'ancien site)
   - Affichage aussi des moyens de paiement et horaires ici

### 🪄 Améliorations UX / Design
- ✅ Zoom niveau 2 sur les images du Gîte
- ✅ Miniatures dans la modale
- Footer propre, mentions légales (en cours)
- Bouton “Retour en haut” (mobile)
- Ajout “Petit déjeuner inclus” dans les cartes chambres
- Bouton de réservation flottant sur certaines pages
- Galerie photo (plus tard)
- Accessibilité & SEO (dans un second temps)

### 🧠 À réfléchir
- Pages chambres dynamiques (`/chambres/:slug`) ou routes manuelles ?
- Redirection 404 pour GitHub Pages & OVH
- Intégration de Google Analytics
- Version EN plus tard ?
