import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Hero'
import { HeroService } from '../../services/hero.service'

import { MatTableDataSource } from '@angular/material/table';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
//import { HEROES } from 'src/app/mock-heroes';






@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = [] as any; //vettore di eroi, con interfaccia Hero
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'signs', 'notes', 'actions'];
  faFilter = faFilter;


  //
  text: string = 'Aggiungi eroe'

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getData();
  }

  //per ricevere il dato tramite select-gender

  getData(): void {
    //get request
    this.heroService.getHeroes().subscribe((response: Hero[]) => {
      this.heroes = response;
      this.dataSource.data = this.heroes;
      this.heroService.tableData = this.dataSource.data;
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
    console.log('sono addHero e pusho, heroes components')
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

  }
  deleteHero(heroD: Hero) {
    //delete request
    this.heroService.deleteHero(heroD).subscribe((data) => {
      console.log(data);
      this.getData();
    });
  }








}
