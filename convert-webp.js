const { default: imagemin } = require('imagemin');
const { default: webp } = require('imagemin-webp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const sourceFolder = 'src/assets/images-original';
const outputFolder = 'src/assets/images';

const files = glob.sync(`${sourceFolder}/**/*.{jpg,jpeg,png}`);

(async () => {
    for (const file of files) {
        const relativePath = path.relative(sourceFolder, file);
        const outputPath = path.join(outputFolder, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

        // Créer le dossier de destination si nécessaire
        const dir = path.dirname(outputPath);
        fs.mkdirSync(dir, { recursive: true });

        const result = await imagemin([file], {
            destination: dir,
            plugins: [webp({ quality: 80 })]
        });

        console.log(`✅ ${relativePath} convertie → ${outputPath}`);
    }

    console.log('🎉 Conversion terminée !');
})();
