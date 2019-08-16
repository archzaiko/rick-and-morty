import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [RickAndMortyService]
})
export class MainComponent implements OnInit {
  
  private allCharacters: any;

  constructor(
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit() {
    this.allCharacters = this.rickAndMortyService.getAllCharacters()
                              .subscribe( (data) => {console.log(data)} )
  }

}
