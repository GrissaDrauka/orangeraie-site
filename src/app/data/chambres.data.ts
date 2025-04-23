export interface Chambre {
    id: string;
    nom: string;
    description: string;
    descriptionDetaillee: string;
    nbPers: string;
    image: string;
    images: string[]; // Pour les carousels ou galeries sur la page détail
    prix: string;
    services?: string[];
}

export const CHAMBRES_DATA: Chambre[] = [
    {
        id: 'azulejos',
        nom: 'Chambre Azulejos',
        description: 'Un air d’Andalousie avec ses carreaux colorés.',
        descriptionDetaillee: `La chambre Azulejos vous transporte dans le sud de l’Espagne avec son charme rustique, ses couleurs chaleureuses et sa décoration soignée.`,
        nbPers: '2 personnes',
        image: 'assets/images/chambres/azulejos.jpg',
        images: [
            'assets/images/chambres/azulejos.jpg',
            'assets/images/chambres/azulejos2.jpg',
            'assets/images/chambres/azulejos3.jpg'
        ],
        prix: '85€ / nuit',
        services: ['Petit déjeuner inclus', 'Wi-Fi', 'Salle de bain privée']
    },
    {
        id: 'zen',
        nom: 'Chambre Zen',
        description: 'Un espace apaisant pour se ressourcer.',
        descriptionDetaillee: `La chambre Zen est conçue pour favoriser la détente et la sérénité. Décoration épurée, lumière douce, une véritable bulle de calme.`,
        nbPers: '2 personnes',
        image: 'assets/images/chambres/zen.jpg',
        images: [
            'assets/images/chambres/zen.jpg',
            'assets/images/chambres/zen2.jpg'
        ],
        prix: '80€ / nuit',
        services: ['Petit déjeuner inclus', 'Climatisation', 'Wi-Fi']
    },
    {
        id: 'famille-jardin',
        nom: 'Chambre Famille Jardin',
        description: 'Parfaite pour les familles avec accès au jardin.',
        descriptionDetaillee: `Spacieuse et lumineuse, cette chambre familiale donne sur le jardin. Elle offre tout le confort pour un séjour à plusieurs.`,
        nbPers: '4 personnes',
        image: 'assets/images/chambres/famille-jardin.jpg',
        images: [
            'assets/images/chambres/famille-jardin.jpg',
            'assets/images/chambres/famille-jardin2.jpg'
        ],
        prix: '115€ / nuit',
        services: ['Petit déjeuner inclus', 'Accès jardin', 'Cuisine partagée']
    }
];
