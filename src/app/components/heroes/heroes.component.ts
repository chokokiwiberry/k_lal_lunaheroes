import { Component, OnInit} from '@angular/core';
import {Hero} from '../../Hero'
import {HeroService} from '../../services/hero.service'
import { ModalService } from 'src/app/services/modal.service';
import {MatTableDataSource} from '@angular/material/table';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
import { CommonModule }     from '@angular/common';
//import { HEROES } from 'src/app/mock-heroes';






@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  heroes = [] as any; //vettore di eroi, con interfaccia Hero
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'signs', 'notes', 'actions'];
  faFilter = faFilter;
  show: boolean= false;

  //
  text: string = 'Aggiungi eroe'
 
  constructor(private heroService: HeroService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getData();
  }

  Prova(){
    if (this.show){
      this.show = false;
    } else{
      this.show = true;
    }
    if (this.show){
      this.modalService.loadAdd();
    }
  }


  //per ricevere il dato tramite select-gender



  getData(): void{
    this.heroService.getHeroes().subscribe((response: Hero[])=>{
      this.heroes = response;
      this.dataSource.data = this.heroes;
      this.heroService.tableData = this.dataSource.data;
    })
    
  }


  filterName(){
    this.dataSource = this.heroService.tableData;
  }

  filterGender(){
   console.log('sono filter', this.heroService.tableData);
   this.dataSource = this.heroService.tableData;
   //bisogna di nuovo aggiornare la scelta del filtro
  }

  addHero(data: any){
    console.log('gneeeee')
   // this.getData();
    const newHero = this.heroService.sharedHero;
    console.log('qua non entra proprio, hero components ');
    this.heroService.addHero(newHero).subscribe( (hero) => {
      this.getData();
      this.heroes.push(hero)
  
    })
     console.log('sono addhero heroes components',this.heroes)
  }
  editHero(hero: Hero){
    
  }
  visualizeHero(hero: Hero){

  }
  deleteHero(heroD: Hero){

    let indexToBeRemoved = this.heroes.findIndex( (hero: { id: number | undefined; }) => {hero.id === heroD.id});
   
    if (indexToBeRemoved != -1){
    this.heroes.splice(indexToBeRemoved, 1);
    }
    
  }


  //prova ad aggiungere l'eroe e con il modal
  loadAdd(){
    this.modalService.loadAdd();
  }



}
