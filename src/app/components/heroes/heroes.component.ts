import { Component, OnInit } from '@angular/core';
import {Hero} from '../../Hero'
import { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [] //vettore di eroi, con interfaccia Hero

  constructor() { }

  ngOnInit(): void {
    //getHeroes 

  }
  editHero(hero: Hero){

  }
  visualizeHero(hero: Hero){

  }
  deleteHero(hero: Hero){

  }

}
