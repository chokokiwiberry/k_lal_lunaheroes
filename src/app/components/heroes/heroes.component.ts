import { Component, OnInit} from '@angular/core';
import {Hero} from '../../Hero'
import {HeroService} from '../../services/hero.service'
import { ModalService } from 'src/app/services/modal.service';
import {MatTableDataSource} from '@angular/material/table';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
//import { HEROES } from 'src/app/mock-heroes';



;

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  heroes: any[] = []; //vettore di eroi, con interfaccia Hero
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'signs', 'notes', 'actions'];
  faFilter = faFilter;

  //
  text: string = 'Aggiungi eroe'
 
  constructor(private heroService: HeroService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getDataProva();

  }

  


  //per ricevere il dato tramite select-gender


  //getProva dal server node

  getDataProva(): void{
    this.heroService.getHeroesProva().subscribe((response: Hero[])=>{

      this.heroes = Object.values(response);
      console.log(typeof(this.heroes))
      this.dataSource.data = this.heroes;
      this.heroService.tableData = this.dataSource.data;
    
    }, (error) =>{
      console.log('error', error);
    })
  }
  getData (): string{
    return this.heroService.sharedData;
  }

  filterName(){
    this.dataSource = this.heroService.tableData;
  }

  filterGender(){
   console.log('sono filter', this.heroService.tableData);
   this.dataSource = this.heroService.tableData;
   //bisogna di nuovo aggiornare la scelta del filtro
  }

  editHero(hero: Hero){
    
  }
  visualizeHero(hero: Hero){

  }
  deleteHero(hero: Hero){
    
  }


  //prova ad aggiungere l'eroe e con il modal
  loadAdd(){
    this.modalService.loadAdd();
  }



}
