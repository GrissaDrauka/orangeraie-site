# Orangeraie - Site Officiel

Bienvenue sur le dépôt du projet **L'Orangeraie**, un site vitrine pour chambres d'hôtes et gîte à Elne, développé avec Angular.

---

# 📅 Informations principales

- **Framework** : Angular 16
- **Style** : Tailwind CSS, Lucide Icons, Angular Material (léger)
- **Hébergement** : OVH
- **Pages disponibles** :
  - Accueil
  - Nos Chambres
  - Notre Gîte
  - Contact
  - (Bientôt : Réservation, Infos pratiques)

# 🚀 Commandes principales

## Développement local

```bash
npm install
npm start
```

## Build production

```bash
npm run deploy:prod
```
Alias de :
```bash
ng build --configuration production --base-href ./
```

## Déploiement

### Sur OVH (FTP)

```bash
npm run deploy:ovh
```
- Build de production
- Envoi automatique par FTP grâce à `ftp-deploy`

### Sur GitHub Pages (preview)

```bash
npm run deploy:git
```

# 📆 Organisation du projet

- `src/app/pages/` : Pages principales du site
- `src/assets/` : Images et ressources statiques
- `ftp-deploy.js` : Script de déploiement automatisé
- `.env` : Variables d'environnement FTP (non versionné)

# 🔒 Sécurité

- Identifiants FTP protégés dans `.env`

# 🔢 Déploiement Automatique Détail

## Build Angular

```bash
npm run deploy:prod
```
Alias de :
```bash
ng build --configuration production --base-href ./
```

## Déploiement OVH (FTP automatique)

### Architecture

- `ftp-deploy.js` automatisé
- `.env` pour variables sensibles

### Exemple `.env`

```plaintext
FTP_USER=identifiant_ftp
FTP_PASSWORD=motdepasse_ftp
FTP_HOST=url_serveur
```

### Exemple `ftp-deploy.js`

```javascript
require('dotenv').config();
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const { exec } = require("child_process");

console.log("🚀 Lancement du build Angular...");

exec("ng build --configuration production --base-href ./", (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Erreur build : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`❗ Build stderr : ${stderr}`);
  }
  console.log(`✅ Build terminé :\n${stdout}`);
  
  console.log("🚀 Début de l'upload FTP...");

  const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + "/dist/orangeraie-site",
    remoteRoot: "/www/",
    include: ["*", "**/*"],
    deleteRemote: false,
    forcePasv: true,
    verbose: true
  };

  ftpDeploy
    .deploy(config)
    .then(res => console.log("✅ Déploiement terminé avec succès :", res))
    .catch(err => console.error("❌ Erreur FTP :", err));
});
```

### Scripts package.json

```json
"scripts": {
  "deploy:prod": "ng build --configuration production --base-href ./",
  "deploy:ovh": "node ftp-deploy.js",
  "deploy:git": "ng build --base-href /orangeraie-site/ && npx angular-cli-ghpages --dir=dist/orangeraie-site"
}
```