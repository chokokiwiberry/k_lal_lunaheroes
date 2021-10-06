import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Options } from '@angular-slider/ngx-slider'

@Component({
  selector: 'app-filter-age',
  templateUrl: './filter-age.component.html',
  styleUrls: ['./filter-age.component.css']
})
export class FilterAgeComponent implements OnInit {
  @Output() onFilterAge: EventEmitter<object> = new EventEmitter();  
  




  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 250
  };
  constructor() { }

  ngOnInit(): void {
  }
  chosenAge(){
    console.log('voglio capire chi è ',this.minValue);

    this.onFilterAge.emit({min: this.minValue, max: this.maxValue});
  
  }

 

}
function max(min: any, minValue: number, max: any, maxValue: number) {
  throw new Error('Function not implemented.');
}

