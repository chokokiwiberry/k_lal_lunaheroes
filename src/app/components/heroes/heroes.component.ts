import { Component, OnInit} from '@angular/core';
import {Hero} from '../../Hero'
import {HeroService} from '../../services/hero.service'
import {MatTableDataSource} from '@angular/material/table';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
//import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  
  heroes: Hero[] = []; //vettore di eroi, con interfaccia Hero
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'signs', 'notes', 'actions'];
  value = '';
 faFilter = faFilter;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
    this.dataSource.data = this.heroes;

  
  }
   onKey(event: Event) { //per prendere l'input e filtrarlo sulla tabella
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.dataSource.filteredData);
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
