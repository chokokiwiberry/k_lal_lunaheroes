import { Component, OnInit} from '@angular/core';
import {Hero} from '../../Hero'
import {HeroService} from '../../services/hero.service'
import {MatTableDataSource} from '@angular/material/table';
//import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = []; //vettore di eroi, con interfaccia Hero
  dataSource = new MatTableDataSource(this.heroes);
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'signs', 'notes', 'actions'];



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

  applyFilter(event: Event) {
    /*const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }

}
