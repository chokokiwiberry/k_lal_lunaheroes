import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { HeroService} from 'src/app/services/hero.service';
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



  isNameChecked = false;
  isAgeChecked = false;
  isGenderChecked = false;
  
  constructor() { }
 clicked_nameCheck(e: Event){
    console.log('sono eeeveneet filteeeer',e)
    e.preventDefault();

    console.log('sono loba loba loba ',this.isNameChecked)
   
    
  }
  ageHasChecked(e:Event){
    console.log(e);
  
  }

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
