import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, map, Observable, of, startWith, switchMap } from 'rxjs';
import { CHAMBRES } from '../data/chambres.data';
import { Chambre } from '../models/chambre.model';

@Injectable({ providedIn: 'root' })
export class ChambresService {

    constructor(private translate: TranslateService) { }

    private rawChambres: Omit<Chambre, 'nom' | 'resume' | 'description' | 'etage' | 'lit'>[] = [
        {
            slug: 'chambre-marine',
            personnes: 2,
            tarifs: {
                basse: [49, 57],
                moyenne: [60, 68],
                haute: [64, 71]
            },
            photos: [
                'assets/chambres/MARINE/recto.webp',
                'assets/chambres/MARINE/verso.webp',
                'assets/chambres/MARINE/sdb.webp'
            ],
            equipements: ['wifi', 'clim', 'douche', 'wc', 'tv']
        },
        {
            slug: 'chambre-nature',
            personnes: 2,
            tarifs: {
                basse: [49, 57],
                moyenne: [60, 68],
                haute: [64, 71]
            },
            photos: [
                'assets/chambres/NATURE/recto.webp',
                'assets/chambres/NATURE/verso.webp',
                'assets/chambres/NATURE/sdb.webp'
            ],
            equipements: ['wifi', 'clim', 'douche', 'wc', 'tv'],
        },
        {
            slug: 'chambre-bambouseraie',
            personnes: 2,
            tarifs: {
                basse: [49, 57],
                moyenne: [60, 68],
                haute: [64, 71]
            },
            photos: [
                'assets/chambres/BAMBOUSERAIE/recto.webp',
                'assets/chambres/BAMBOUSERAIE/verso.webp',
                'assets/chambres/BAMBOUSERAIE/sdb.webp'
            ],
            equipements: ['wifi', 'clim', 'douche', 'wc', 'tv']
        },
        {
            slug: 'chambre-atelier',
            personnes: 3,
            tarifs: {
                basse: [62, 62, 68],
                moyenne: [73, 73, 80],
                haute: [76, 76, 83]
            },
            photos: [
                'assets/chambres/ATELIER/recto.webp',
                'assets/chambres/ATELIER/verso.webp',
                'assets/chambres/ATELIER/sdb.webp'
            ],
            equipements: ['wifi', 'clim', 'douche', 'wc', 'tv']
        },
        {
            slug: 'chambre-coloniale',
            personnes: 4,
            tarifs: {
                basse: [66, 66, 76, 88],
                moyenne: [0, 76, 88, 99],
                haute: [0, 81, 91, 102]
            },
            photos: [
                'assets/chambres/COLONIALE/recto.webp',
                'assets/chambres/COLONIALE/verso.webp',
                'assets/chambres/COLONIALE/sdb.webp'
            ],
            equipements: ['wifi', 'clim', 'douche', 'wc', 'tv']
        }
    ];

    getAll(): Observable<Chambre[]> {
        return of(CHAMBRES);
    }

    getBySlug(slug: string): Observable<Chambre | undefined> {
        const raw = this.rawChambres.find(c => c.slug === slug);
        if (!raw) return of(undefined);

        return this.translate.onLangChange.pipe(
            startWith({ lang: this.translate.currentLang }),
            switchMap(() =>
                this.translate.get([
                    `chambres.${slug}.nom`,
                    `chambres.${slug}.resume`,
                    `chambres.${slug}.description`,
                    `chambres.${slug}.etage`,
                    `chambres.${slug}.lit`
                ]).pipe(
                    map(translations => ({
                        ...raw,
                        nom: translations[`chambres.${slug}.nom`],
                        resume: translations[`chambres.${slug}.resume`],
                        description: translations[`chambres.${slug}.description`],
                        etage: translations[`chambres.${slug}.etage`],
                        lit: translations[`chambres.${slug}.lit`]
                    }))
                )
            )
        );
    }


    getChambresDeux(): Observable<Chambre[]> {
        return of(CHAMBRES.filter(c => c.personnes === 2));
    }

    getChambresFamiliales(): Observable<Chambre[]> {
        return of(CHAMBRES.filter(c => c.personnes > 2));
    }

    getAllTranslated(): Observable<Chambre[]> {
        return combineLatest([
            this.translate.onLangChange.pipe(startWith({ lang: this.translate.currentLang })),
            of(this.rawChambres)
        ]).pipe(
            switchMap(([_, rawChambres]) =>
                this.translate.get([
                    ...rawChambres.flatMap(c => [
                        `chambres.${c.slug}.nom`,
                        `chambres.${c.slug}.resume`,
                        `chambres.${c.slug}.description`,
                        `chambres.${c.slug}.etage`,
                        `chambres.${c.slug}.lit`
                    ])
                ]).pipe(
                    map(translations => rawChambres.map(c => ({
                        ...c,
                        nom: translations[`chambres.${c.slug}.nom`],
                        resume: translations[`chambres.${c.slug}.resume`],
                        description: translations[`chambres.${c.slug}.description`],
                        etage: translations[`chambres.${c.slug}.etage`],
                        lit: translations[`chambres.${c.slug}.lit`]
                    })))
                )
            )
        );
    }

}
