import { Component, OnInit} from '@angular/core';
import {Hero} from '../../Hero'
import {HeroService} from '../../services/hero.service'
import { ModalService } from 'src/app/services/modal.service';
import {MatTableDataSource} from '@angular/material/table';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
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


  //
  text: string = 'Aggiungi eroe'
 
  constructor(private heroService: HeroService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getData();
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
    console.log('sono addHero e pusho, heroes components')
    this.heroService.addHero(data).subscribe( (hero ) => {
      console.log('sono nuovo hero',hero)
     
      this.getData();
    })

  }
  editHero(hero: Hero){
    
  }
  visualizeHero(hero: Hero){

  }
  deleteHero(heroD: Hero){
    this.heroService
    .deleteHero(heroD)
    .subscribe( () => (
    this.heroes = this.heroes.filter((h: { id: number | undefined; }) => h.id !== heroD.id)));

    
  }



 

 


}
