import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CharactersGalleryComponent } from './characters-gallery.component';
import { CharacterCardComponent } from './character-card/character-card.component';
 
@NgModule({
    imports:      [BrowserModule],
    providers:    [],
    declarations: [CharactersGalleryComponent, CharacterCardComponent],
    exports:      [],
    bootstrap:    []
  })
export class CharactersGalleryModule { }