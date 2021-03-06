import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../Hero' //struttura del singolo item
import { HEROES } from '../mock-heroes'


import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'

})

export class HeroService {

  chosenGender!: string; //salvo il valore scelto e lo passo in questa variabile 
  loggedIn: boolean = false; //variabile che indica se sei logged in o no
  constructor(public dialog: MatDialog, private http: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/api/heroes')
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const url = `/api/heroes/${hero.id}`;
    return this.http.delete<Hero>(url, httpOptions);
  }


  addHero(newHero: Hero): Observable<Hero> {
    return this.http.post<Hero>('/api/heroes', newHero, httpOptions);
  }

  editHero(updatedHero: Hero): Observable<Hero> {
    const url = `/api/heroes/${updatedHero.id}`;
    return this.http.put<Hero>(url, updatedHero, httpOptions);
  }


}
