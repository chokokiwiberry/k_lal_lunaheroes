import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  faFilter = faFilter;
  panelOpenState = false;
  @Output() onFilterAge: EventEmitter<object> = new EventEmitter();  
  @Output() onFilterName: EventEmitter<string> = new EventEmitter();  
  @Output() onFilterGender: EventEmitter<string> = new EventEmitter();  
  constructor() { }

  ngOnInit(): void {
  }
filterAge(object: any){
  this.onFilterAge.emit(object);
}
filterName(string: any){
  this.onFilterName.emit(string);
}
filterGender(string: any){
  this.onFilterGender.emit(string);

}
}
