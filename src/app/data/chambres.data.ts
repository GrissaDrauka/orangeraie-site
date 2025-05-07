import { Chambre } from '../models/chambre.model';

export const CHAMBRES: Chambre[] = [
    {
        slug: 'chambre-marine',
        nom: 'chambres.marine.nom',
        resume: 'chambres.marine.resume',
        description: 'chambres.marine.description',
        personnes: 2,
        etage: 'chambres.marine.etage',
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
        lit: 'chambres.marine.lit'
    },
    {
        slug: 'chambre-nature',
        nom: 'chambres.nature.nom',
        resume: 'chambres.nature.resume',
        description: 'chambres.nature.description',
        personnes: 2,
        etage: 'chambres.nature.etage',
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
        lit: 'chambres.nature.lit'
    },
    {
        slug: 'chambre-bambouseraie',
        nom: 'chambres.bambouseraie.nom',
        resume: 'chambres.bambouseraie.resume',
        description: 'chambres.bambouseraie.description',
        personnes: 2,
        etage: 'chambres.bambouseraie.etage',
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
        lit: 'chambres.bambouseraie.lit'
    },
    {
        slug: 'chambre-atelier',
        nom: 'chambres.atelier.nom',
        resume: 'chambres.atelier.resume',
        description: 'chambres.atelier.description',
        personnes: 3,
        etage: 'chambres.atelier.etage',
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
        lit: 'chambres.atelier.lit'
    },
    {
        slug: 'chambre-coloniale',
        nom: 'chambres.coloniale.nom',
        resume: 'chambres.coloniale.resume',
        description: 'chambres.coloniale.description',
        personnes: 4,
        etage: 'chambres.coloniale.etage',
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
        lit: 'chambres.coloniale.lit'
    }
];
