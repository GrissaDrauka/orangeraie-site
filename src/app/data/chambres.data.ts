import { Chambre } from '../models/chambre.model';

export const CHAMBRES: Chambre[] = [
    {
        slug: 'chambre-marine',
        nom: 'Chambre Marine',
        resume: 'Une ambiance qui rappelle la mer',
        description: 'Laissez-vous bercer par une atmosphère marine, entre bleu doux et esprit bord de mer.',
        personnes: 2,
        tarif: '49€/nuit',
        photos: [
            'assets/chambres/chambre_marine.jpg',
            'assets/chambres/chambre_marine.jpg',
        ],
        equipements: ['wifi', 'local_cafe', 'ac_unit', 'bathroom']
    },
    {
        slug: 'chambre-nature',
        nom: 'Chambre Nature',
        resume: 'Nature et élégance',
        description: 'Une chambre habillée de fer forgé aux motifs végétaux pour une touche de nature élégante.',
        personnes: 2,
        tarif: '49€/nuit',
        photos: [
            'assets/chambres/chambre_nature.jpg',
            'assets/chambres/chambre_nature.jpg',
        ],
        equipements: ['wifi', 'local_cafe', 'ac_unit', 'bathroom']
    },
    {
        slug: 'chambre-bambouseraie',
        nom: 'Chambre Bambouseraie',
        resume: 'Ambiance zen et apaisante',
        description: 'Une chambre apaisante à l’ambiance zen, inspirée par la douceur des bambous.',
        personnes: 2,
        tarif: '49€/nuit',
        photos: [
            'assets/chambres/chambre_bambouseraie.jpg',
            'assets/chambres/chambre_bambouseraie.jpg',
        ],
        equipements: ['wifi', 'local_cafe', 'ac_unit', 'bathroom']
    },
    {
        slug: 'chambre-atelier',
        nom: 'Chambre l\'Atelier',
        resume: 'Un séjour inspiré',
        description: 'Une chambre au caractère affirmé, entre bois, métal et esprit atelier, pour un séjour inspiré.',
        personnes: 3,
        tarif: '62€/nuit',
        photos: [
            'assets/chambres/chambre_atelier.jpg',
            'assets/chambres/chambre_atelier.jpg',
        ],
        equipements: ['wifi', 'local_cafe', 'ac_unit', 'bathroom']
    },
    {
        slug: 'chambre-coloniale',
        nom: 'Chambre Coloniale',
        resume: 'Charme colonial et élégance',
        description: 'Une chambre élégante aux accents d’ailleurs, bois foncé, matières naturelles et charme colonial.',
        personnes: 4,
        tarif: '66€/nuit',
        photos: [
            'assets/chambres/chambre_atelier.jpg',
            'assets/chambres/chambre_atelier.jpg',
        ],
        equipements: ['wifi', 'local_cafe', 'ac_unit', 'bathroom']
    }
];
