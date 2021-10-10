import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { LabelType, Options } from '@angular-slider/ngx-slider'
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-filter-age',
  templateUrl: './filter-age.component.html',
  styleUrls: ['./filter-age.component.css']
})
export class FilterAgeComponent implements OnInit {
  @Output() onFilterAge: EventEmitter<object> = new EventEmitter();  
  minValue: number = 25;
  maxValue: number = 75;
  options: Options = {
    floor: 0,
    ceil: 100,
    vertical: true,
    disabled: true,
    translate: (value: number, label: LabelType): string => {  
      switch (label) {  
          case LabelType.Low:  
              return "<b>Età min:</b> " + value;  
          case LabelType.High:  
              return "<b>Età max:</b> " + value;  
          default:  
              return "" + value;  
      }  
}
  };
  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
  if (this.heroService.ageChecked){
    this.options.disabled = true;
  }
  }
  chosenAge(){

    this.onFilterAge.emit({min: this.minValue, max: this.maxValue});
  
  }


}

