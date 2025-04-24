import { Chambre } from '../models/chambre.model';

export const CHAMBRES: Chambre[] = [
    {
        slug: 'chambre-marine',
        nom: 'Chambre Marine',
        resume: 'Laissez-vous bercer par une atmosphère marine, entre bleu doux et esprit bord de mer.',
        description: 'Plongez dans une ambiance iodée, où les teintes de bleu doux rappellent l’horizon et le souffle marin. Chaque détail évoque le calme des rivages, pour une échappée relaxante entre ciel, mer et lumière.',
        personnes: 2,
        tarifs: {
            basse: [49, 57],
            moyenne: [60, 68],
            haute: [64, 71]
        },
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
        tarifs: {
            basse: [49, 57],
            moyenne: [60, 68],
            haute: [64, 71]
        },
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
        tarifs: {
            basse: [49, 57],
            moyenne: [60, 68],
            haute: [64, 71]
        },
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
        tarifs: {
            basse: [62, 62, 68],
            moyenne: [73, 73, 80],
            haute: [76, 76, 83]
        },
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
        tarifs: {
            basse: [66, 66, 76, 88],
            moyenne: [0, 76, 88, 99],
            haute: [0, 81, 91, 102]
        },
        photos: [
            'assets/chambres/chambre_coloniale.jpg',
            'assets/chambres/chambre_coloniale.jpg',
        ],
        equipements: ['wifi', 'local_cafe', 'ac_unit', 'bathroom']
    }
];
