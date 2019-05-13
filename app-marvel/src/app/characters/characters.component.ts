import { Component, OnInit, Input } from '@angular/core';

import { Character} from './character/character.model'
import { CharactersService } from './characters.service'

@Component({
  selector: 'GFT-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  characters: Character[]
  
  public getCharacters(){
    return this.charactersService.getCharacters()
    .subscribe(characters => this.characters = characters.data.results)  
  }
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
       this.getCharacters()
  }
}
