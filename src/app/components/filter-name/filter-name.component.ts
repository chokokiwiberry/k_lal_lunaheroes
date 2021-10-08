import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {HeroService} from '../../services/hero.service'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filter-name',
  templateUrl: './filter-name.component.html',
  styleUrls: ['./filter-name.component.css']
})
export class FilterNameComponent implements OnInit {
  @Output() onFilterName: EventEmitter<string> = new EventEmitter(); 

  faSearch = faSearch;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }


  onKey(event: Event){
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.onFilterName.emit(value);

  }

/*
  //da aggiustare la funzione per cercare da input 
  onKey(event: Event) { //per prendere l'input e filtrarlo sulla tabella
  const element = event.target as HTMLInputElement;
  const value = element.value; //per estrarre l'elemento dalla scelta option
  var results = [];
  if (value !== undefined || value !== null){
    for (var i = 0; i<this.heroService.tableData.length; i++){
      if (this.heroService.tableData[i].name === value){
        results.push(this.heroService.tableData[i]);
      }
    }
  } 
  //this.heroService.tableData = results;
  }  */
}
