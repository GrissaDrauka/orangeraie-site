import { Injectable } from '@angular/core';
import { CHAMBRES } from '../data/chambres.data';
import { Chambre } from '../models/chambre.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChambresService {
    getAll(): Observable<Chambre[]> {
        return of(CHAMBRES);
    }

    getBySlug(slug: string): Observable<Chambre | undefined> {
        return of(CHAMBRES.find(c => c.slug === slug));
    }

    getChambresDeux(): Observable<Chambre[]> {
        return of(CHAMBRES.filter(c => c.personnes === 2));
    }

    getChambresFamiliales(): Observable<Chambre[]> {
        return of(CHAMBRES.filter(c => c.personnes > 2));
    }

}
