import { Component } from '@angular/core';

import { RickAndMortyService } from '../rick-and-morti.service';

@Component({
  selector: 'char-gallery',
  templateUrl: './characters-gallery.component.html',
  styleUrls: ['./characters-gallery.component.scss']
})

export class CharactersGalleryComponent {

  private renderData: any;

  constructor(
    private rickAndMortyService: RickAndMortyService
  ) {
    this.renderData = {
      characters: []
    }

    let characters = this.rickAndMortyService.getAllCharacters().subscribe(
      (res) => {
        this.render(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private render(data) {
    this.renderData.characters = data.results;
    console.log(this.renderData);
  }
}