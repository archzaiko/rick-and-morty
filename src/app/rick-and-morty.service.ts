import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getAllCharacters() {
  	return this.http.get('https://rickandmortyapi.com/api/character/');
  }
}
