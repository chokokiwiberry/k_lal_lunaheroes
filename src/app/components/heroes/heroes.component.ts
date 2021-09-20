import { Component, OnInit } from '@angular/core';
import {Hero} from '../../Hero'
import {HeroService} from '../../services/hero.service'

import { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; //vettore di eroi, con interfaccia Hero

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();

  }
  editHero(hero: Hero){

  }
  visualizeHero(hero: Hero){

  }
  deleteHero(hero: Hero){
    
  }

}
