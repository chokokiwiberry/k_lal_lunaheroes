import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Hero} from '../Hero' //struttura del singolo item
import {HEROES} from '../mock-heroes'


import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
 
})
export class HeroService {
  sharedData!: any;

  tableData!: any; //sono i dati della tabella che servono per fare filtrare e poi mostrare a schermo

  chosenGender!: string; //salvo il valore scelto e lo passo in questa variabile 



  constructor(public dialog: MatDialog, private http: HttpClient) { }

 
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/api/getHeroes')
  }

  deleteHero(hero: Hero){
    console.log('cancella')
  }

  addHero(newHero: Hero){
    console.log(newHero);
    HEROES.push(newHero);
    console.log(HEROES);

  }










}
