import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { LabelType, Options } from '@angular-slider/ngx-slider'
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-filter-age',
  templateUrl: './filter-age.component.html',
  styleUrls: ['./filter-age.component.css']
})
export class FilterAgeComponent implements OnInit, OnChanges {
  @Output() onFilterAge: EventEmitter<object> = new EventEmitter();
  @Input() nameOrGenderClick!: boolean;
  //@Input() clicked_agecheck!: boolean;
  clicked!: boolean;
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
  disabled: any;
  constructor(private heroService: HeroService) { }
  ngOnChanges(changes: SimpleChanges): void {
   // console.log('sono changes agee', typeof (changes.nameOrGenderClick.currentValue));
    //console.log(changes['nameOrGenderClick'].currentValue);
    if (changes['nameOrGenderClick'].currentValue) {
      this.disabled = true;
      this.options = Object.assign({}, this.options, { disabled: this.disabled });
    } else {
      //console.log('sono else agecheck,' ,changes['ageChecked'].currentValue);
      
        this.disabled = false;
        this.options = Object.assign({}, this.options, { disabled: this.disabled });
    
      
      
    }
   
  }
  ngOnInit(): void {
    this.options.disabled = true;
  }
  chosenAge() {

    this.onFilterAge.emit({ min: this.minValue, max: this.maxValue });

  }

 
}



