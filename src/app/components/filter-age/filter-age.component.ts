import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider'


@Component({
  selector: 'app-filter-age',
  templateUrl: './filter-age.component.html',
  styleUrls: ['./filter-age.component.css']
})
export class FilterAgeComponent implements OnInit {
  @Output() onFilterAge: EventEmitter<object> = new EventEmitter();


  @Input()
  set nameOrGenderClick(value: any) {//name or gender checked 
    if (value) {
      this.Disable();
    }
  }
  @Input()
  set clicked_agecheck(value: any) {//name or gender checked 
    if (value) {
      this.Enable();
    } else {
      this.Disable();
    }
  }

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
          return "<p>Età min:</p> " + value;
        case LabelType.High:
          return "<p>Età max:</p> " + value;
        default:
          return "" + value;
      }
    }
  };
  disabled: any;
  constructor() { }

  Disable() {
    this.disabled = true;
    this.options = Object.assign({}, this.options, { disabled: this.disabled });
  }

  Enable() {
    this.disabled = false;
    this.options = Object.assign({}, this.options, { disabled: this.disabled });
  }

  ngOnInit(): void {
    this.options.disabled = true;
  }

  chosenAge() {
    this.onFilterAge.emit({ min: this.minValue, max: this.maxValue });
  }


}



