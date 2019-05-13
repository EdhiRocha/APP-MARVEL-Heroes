import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { MARVEL_API,
         apiKey,
         hash,
         timeStamp } from '../app.Api';
import { Observable } from 'rxjs';


@Injectable()
export class CharactersService{    
    constructor(private http: HttpClient){}         

    getCharacters(): Observable<any>{
         return this.http.get<any>(`${MARVEL_API}characters?limit=50&ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`)            
    }

    getCharacterById(id: string): Observable<any>{
        return this.http.get<any>(`${MARVEL_API}characters/${id}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`)
    }
}