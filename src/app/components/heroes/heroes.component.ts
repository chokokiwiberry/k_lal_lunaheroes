import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Hero'
import { HeroService } from '../../services/hero.service'
import { MatTableDataSource } from '@angular/material/table';
import {Router} from '@angular/router'

//import { HEROES } from 'src/app/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = [] as any; //vettore di eroi, con interfaccia Hero
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'age', 'gender', 'signs', 'notes', 'actions'];




  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  Logout(): void{
    if (this.heroService.loggedIn === true){
      this.heroService.loggedIn = false;
      this.router.navigateByUrl('/');

    }
  }

  getData(): void {
    //get request
    this.heroService.getHeroes().subscribe((response: Hero[]) => {
      this.heroes = response;
      this.dataSource.data = this.heroes;
      
    })
  }


  filterName(string: any) {
    let tmp = [] as any;
    if (string) {
      for (var i = 0; i < this.heroes.length; i = i + 1) {
        if (this.heroes[i].name === string) {
          tmp.push(this.heroes[i]);
        }
      }
      this.dataSource = tmp;
    } else {
      this.dataSource = this.heroes;
    }
  }

  filterGender(string: any) {
  let tmp = [] as any;
    if (string){
      for (var i=0; i<this.heroes.length; i=i+1){
        if (this.heroes[i].gender === string){
          tmp.push(this.heroes[i]);
        }
      }
      this.dataSource = tmp;
    } else {
      this.dataSource = this.heroes;
    }
  }

  filterAge(obj: any) {
    //filter age riceve un oggetto dove sono contenuti i range scelti dall'utente 
    let tmp = [] as any;
    for (var i = 0; i < this.heroes.length; i = i + 1) {
      if (this.heroes[i].age > obj.min && this.heroes[i].age < obj.max) {
        tmp.push(this.heroes[i]);
      }
    }
    this.dataSource = tmp;

  }

  addHero(data: any) {
    //post request
    this.heroService.addHero(data).subscribe((hero) => {
      console.log('sono nuovo hero', hero)
      this.getData();
    })

  }
  editHero(hero: Hero) {
    //put request
    this.heroService.editHero(hero).subscribe();
    this.getData();
  }
  visualizeHero(hero: Hero) {
    // non serve chiamare nessuna funzione service perché mostro solo dati a schermo
  }
  deleteHero(heroD: Hero) {
    //delete request
    this.heroService.deleteHero(heroD).subscribe((data) => {
      console.log(data);
      this.getData();
    });
  }

 



}
