import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  panelOpenState = false;
  @Output() onFilterAge: EventEmitter<object> = new EventEmitter();
  @Output() onFilterName: EventEmitter<string> = new EventEmitter();
  @Output() onFilterGender: EventEmitter<string> = new EventEmitter();



  isNameChecked = false;
  isAgeChecked = false;
  isGenderChecked = false;

  constructor() { }

  //per evitare che quando si clicca sulle componenti, i checkbox vengano deselezionati
  onClick(e: Event) {
    e.preventDefault();
  }

  ngOnInit(): void {
  }


  filterAge(object: any) {
    this.onFilterAge.emit(object);
  }

  filterName(string: any) {
    this.onFilterName.emit(string);
  }

  filterGender(string: any) {
    this.onFilterGender.emit(string);
  }

}
