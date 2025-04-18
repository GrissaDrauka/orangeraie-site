
# 📌 Plan de Développement du Site "L'Orangeraie"

## ✅ Fonctionnalités déjà en place

### 🌐 Structure & Navigation
- Navbar sticky avec fond transparent + flou & couleur au scroll
- Hover élégant avec soulignement (desktop)
- Menu mobile fluide, responsive, avec animation d’ouverture

### 🛏️ Pages Créées
- Page d’accueil terminée (avec texte d’intro, services, etc.)
- Page "Nos Chambres" :
  - Cartes des chambres (2 pers. et familles) avec badge, description, et lien "En savoir plus"
- ✅ Page **Notre Gîte** :
  - Carousel PrimeNG Galleria fonctionnel
  - Zoom via modale personnalisée
  - Navigation (précédent/suivant)
  - Miniatures sous la modale
  - Apparition douce
  - Design responsive et fluide
  - Présentation des équipements du gîte
  - CTA “Réserver” (téléphone / en ligne)

### ☁️ Déploiement
- Version actuelle en Angular 16 avec Webpack (pas Vite)
- Site en ligne via GitHub Pages
- Prévu : déploiement final sur OVH avec :
  - nom de domaine déjà existant
  - build via `ng build --base-href ./`
  - envoi FTP dans `/www`
  - `.htaccess` pour rediriger vers `index.html`

## 🔜 À FAIRE / Plan de Développement

### 🛎️ Étapes principales
1. Créer une vraie **page “Nos Chambres”** avec lien "En savoir plus" menant à une page dédiée par chambre
2. Ajouter une **page “Notre Gîte” complète** *(✅ déjà réalisée, validée)*
3. Créer une **page “Contact”** avec :
   - Carte Google Maps intégrée
   - Formulaire de contact fonctionnel
   - Coordonnées visibles (tél, email)
4. Créer une **page “Infos Pratiques”** :
   - Horaires d’arrivée / départ
   - Moyens de paiement
   - Services inclus (petit-déjeuner, cuisine d’été, wifi…)
   - Parking, animaux, accessibilité
5. Ajouter une **page “Réservation”** dédiée avec :
   - Intégration du calendrier de réservation en ligne (iframe ou autre)
   - Horaires + moyen de paiement visibles ici aussi

### 🪄 Améliorations UX / Design
- Ajouter un bouton “Retour en haut” sur mobile
- Ajouter une vraie galerie photos (avec tri ?)
- Ajouter un bouton flottant “Réserver” sur les pages chambres
- Ajout “Petit-déjeuner inclus” sur les cartes de chambre
- Mini résumé des infos pratiques sur la home
- Footer propre avec mentions légales + lien vers CGV si besoin

### 🔍 À réfléchir
- Pages chambres en dynamic route (`/chambres/:slug`) ?
- Redirection 404 personnalisée sur GitHub Pages et OVH
- SEO : balises `title`, `description`, `alt`, etc.
