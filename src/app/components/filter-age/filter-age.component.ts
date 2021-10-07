import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LabelType, Options } from '@angular-slider/ngx-slider'

@Component({
  selector: 'app-filter-age',
  templateUrl: './filter-age.component.html',
  styleUrls: ['./filter-age.component.css']
})
export class FilterAgeComponent implements OnInit {
  @Output() onFilterAge: EventEmitter<object> = new EventEmitter();  
  
  minValue: number = 250;
  maxValue: number = 750;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {  
      switch (label) {  
          case LabelType.Low:  
              return "<b>Min age:</b> " + value;  
          case LabelType.High:  
              return "<b>Max age:</b> " + value;  
          default:  
              return "" + value;  
      }  
}
  };
  constructor() { }

  ngOnInit(): void {
  }
  chosenAge(){

    this.onFilterAge.emit({min: this.minValue, max: this.maxValue});
  
  }


}

