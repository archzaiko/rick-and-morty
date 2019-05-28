import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RickAndMortyService {
    constructor(private http: HttpClient) {}
    
    public getSingleCharacter(id) {
        let requestURL = 'https://rickandmortyapi.com/api/character/';
        let config = {
            url: requestURL
        }
        return this.getApiRequestData(config);
    }

    public getAllCharacters(pageNumber?: number) {
        let requestURL = 'https://rickandmortyapi.com/api/character/';
        let config = {
            url: requestURL
        }
        return this.getApiRequestData(config);
    }

    private getApiRequestData(config) {
        return this.http.get(config.url);
    }
}