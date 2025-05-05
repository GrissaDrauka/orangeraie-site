import { Chambre } from '../models/chambre.model';

export const CHAMBRES: Chambre[] = [
    {
        slug: 'chambre-marine',
        nom: 'Chambre Marine',
        resume: 'Laissez-vous bercer par une atmosphère marine, entre bleu doux et esprit bord de mer.',
        description: 'Plongez dans une ambiance iodée, où les teintes de bleu doux rappellent l’horizon et le souffle marin. Chaque détail évoque le calme des rivages, pour une échappée relaxante entre ciel, mer et lumière.',
        personnes: 2,
        etage: '2ème étage',
        tarifs: {
            basse: [49, 57],
            moyenne: [60, 68],
            haute: [64, 71]
        },
        photos: [
            'assets/chambres/MARINE/recto.jpg',
            'assets/chambres/MARINE/verso.jpg',
            'assets/chambres/MARINE/sdb.jpg'
        ],
        equipements: ['wifi', 'clim', 'douche', 'wc', 'tv'],
        lit: '1 lit double (140x190cm)'
    },
    {
        slug: 'chambre-nature',
        nom: 'Chambre Nature',
        resume: 'Une chambre habillée de fer forgé aux motifs végétaux pour une touche de nature élégante.',
        description: 'Une chambre lumineuse où le fer forgé dessine de délicats motifs végétaux, pour une ambiance naturelle et élégante. Le charme discret des matériaux s’allie à la douceur des teintes pour une pause paisible et raffinée.',
        personnes: 2,
        etage: '1er étage',
        tarifs: {
            basse: [49, 57],
            moyenne: [60, 68],
            haute: [64, 71]
        },
        photos: [
            'assets/chambres/NATURE/recto.jpg',
            'assets/chambres/NATURE/verso.jpg',
            'assets/chambres/NATURE/sdb.jpg'
        ],
        equipements: ['wifi', 'clim', 'douche', 'wc', 'tv'],
        lit: '1 lit double (140x190cm)'
    },
    {
        slug: 'chambre-bambouseraie',
        nom: 'Chambre Bambouseraie',
        resume: 'Une chambre apaisante à l’ambiance zen, inspirée par la douceur des bambous.',
        description: 'Esprit zen, matériaux naturels, touches végétales : cette chambre inspirée par les bambous offre une atmosphère apaisante, idéale pour se ressourcer en toute simplicité.',
        personnes: 2,
        etage: '1er étage',
        tarifs: {
            basse: [49, 57],
            moyenne: [60, 68],
            haute: [64, 71]
        },
        photos: [
            'assets/chambres/BAMBOUSERAIE/recto.jpg',
            'assets/chambres/BAMBOUSERAIE/verso.jpg',
            'assets/chambres/BAMBOUSERAIE/sdb.jpg'
        ],
        equipements: ['wifi', 'clim', 'douche', 'wc', 'tv'],
        lit: '1 lit double (140x190cm)'
    },
    {
        slug: 'chambre-atelier',
        nom: 'Chambre l\'Atelier',
        resume: 'Une chambre au caractère affirmé, entre bois, métal et esprit atelier, pour un séjour inspiré.',
        description: 'Une chambre au caractère affirmé, où bois brut et métal se rencontrent dans une ambiance atelier chic. Une atmosphère singulière, inspirée des lofts, pour un séjour résolument créatif.',
        personnes: 3,
        etage: '2ème étage',
        tarifs: {
            basse: [62, 62, 68],
            moyenne: [73, 73, 80],
            haute: [76, 76, 83]
        },
        photos: [
            'assets/chambres/ATELIER/recto.jpg',
            'assets/chambres/ATELIER/verso.jpg',
            'assets/chambres/ATELIER/sdb.jpg'
        ],
        equipements: ['wifi', 'clim', 'douche', 'wc', 'tv'],
        lit: '1 lit double (140x190cm) et 1 lit simple (90x190cm)'
    },
    {
        slug: 'chambre-coloniale',
        nom: 'Chambre Coloniale',
        resume: 'Une chambre élégante aux accents d’ailleurs, bois foncé, matières naturelles et charme colonial.',
        description: 'Une chambre élégante aux accents d’ailleurs, où bois foncé et matières naturelles composent un décor inspiré du charme colonial. Une invitation au voyage dans un cadre raffiné et apaisant.',
        personnes: 4,
        etage: '1er étage',
        tarifs: {
            basse: [66, 66, 76, 88],
            moyenne: [0, 76, 88, 99],
            haute: [0, 81, 91, 102]
        },
        photos: [
            'assets/chambres/COLONIALE/recto.jpg',
            'assets/chambres/COLONIALE/verso.jpg',
            'assets/chambres/COLONIALE/sdb.jpg'
        ],
        equipements: ['wifi', 'clim', 'douche', 'wc', 'tv'],
        lit: '1 lit double (160x200cm) et 2 lits simples (90x190cm)'
    }
];
