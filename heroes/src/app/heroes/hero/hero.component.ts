import { Component, OnInit, Input } from '@angular/core';

import { Hero } from './hero.model';

@Component({
  selector: 'GFT-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  @Input()  hero: Hero

  constructor() { }

  ngOnInit() {
  }

}
