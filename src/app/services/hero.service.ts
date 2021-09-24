import { Injectable } from '@angular/core';

import {Hero} from '../Hero'
import {HEROES} from '../mock-heroes'

@Injectable({
  providedIn: 'root'
 
})
export class HeroService {
  sharedData!: any;
  tableData!: any;




  constructor() { }

  getHeroes(): Hero[]{
    return HEROES;
  }

  deleteHero(hero: Hero){
    console.log('cancella')
  }

  
}
