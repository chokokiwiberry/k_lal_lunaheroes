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


  //per passare i valori dei check alle componenti figlie 
  nameChecked!: boolean;
  ageChecked!: boolean;
  genderChecked!: boolean;




  constructor(public dialog: MatDialog, private http: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/api/heroes')
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const url = `/api/heroes/${hero.id}`;
    console.log('sono url di', url)
    return this.http.delete<Hero>(url, httpOptions);
  }


  addHero(newHero: Hero): Observable<Hero> {
    console.log(newHero);
    HEROES.push(newHero);
    console.log(HEROES);
    console.log('sono di addhero service post', this.http.post<Hero>('/api/heroes', newHero, httpOptions))
    return this.http.post<Hero>('/api/heroes', newHero, httpOptions);
  }

  editHero(updatedHero: Hero): Observable<Hero> {
    const url = `/api/heroes/${updatedHero.id}`;
    return this.http.put<Hero>(url, updatedHero, httpOptions);
  }


}
