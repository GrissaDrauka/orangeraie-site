export interface Chambre {
    slug: string;
    nom: string;
    resume: string;
    description: string;
    personnes: number;
    tarifs: {
        basse: number[];
        moyenne: number[];
        haute: number[];
    };
    etage: string;
    photos: string[];
    equipements: string[]; // icônes
    lit: string;
}
