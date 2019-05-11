import { Component, OnInit, Input } from '@angular/core';

import { Hero } from './hero/hero.model'
import { HeroesService } from './heroes.service'

@Component({
  selector: 'GFT-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private HeroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.HeroesService.heroes()
  }
}
