import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { CharactersService } from '../characters/characters.service'
import { Character } from '../characters/character/character.model';

@Component({
  selector: 'GFT-character-detail',
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent implements OnInit {

  character: Character

  constructor(private charactersService: CharactersService,
              private route: ActivatedRoute) { }

  public getCharacter(id: string){
    return this.charactersService.getCharacterById(id)
      .subscribe(character => this.character = character.data.results[0])
  }

  ngOnInit() {
    this.getCharacter(this.route.snapshot.params['id'])
  }

}
