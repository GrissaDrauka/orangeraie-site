export interface Chambre {
    slug: string;
    nom: string;
    resume: string;
    description: string;
    personnes: number;
    tarif: string;
    photos: string[];
    equipements: string[]; // icônes Material
}
