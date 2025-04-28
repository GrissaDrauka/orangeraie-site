const { exec } = require("child_process");
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

// Build Angular d'abord
console.log("🚀 Lancement du build Angular...");
exec("ng build --configuration production --base-href ./", (error, stdout, stderr) => {
    if (error) {
        console.error(`❌ Erreur lors du build : ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`❗ Build stderr : ${stderr}`);
    }
    console.log(`✅ Build terminé :\n${stdout}`);

    // Puis Upload FTP
    console.log("🚀 Début de l'upload FTP...");

    const config = {
        user: "remiwab",
        password: "xaMTkAeT4EhJ",
        host: "ftp.cluster100.hosting.ovh.net",
        port: 21,
        localRoot: __dirname + "/dist/orangeraie-site",
        remoteRoot: "/www/",
        include: ["*", "**/*"],
        deleteRemote: false,
        forcePasv: true
    };

    ftpDeploy
        .deploy(config)
        .then(res => console.log("✅ Déploiement terminé avec succès :", res))
        .catch(err => console.error("❌ Erreur lors du déploiement :", err));
});
