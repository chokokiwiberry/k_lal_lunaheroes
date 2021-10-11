import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filter-name',
  templateUrl: './filter-name.component.html',
  styleUrls: ['./filter-name.component.css']
})
export class FilterNameComponent implements OnInit, OnChanges {
  @Output() onFilterName: EventEmitter<string> = new EventEmitter();
  @Input() ageOrGenderClick!: boolean; //age or gender checked 
  @Input() clicked_namecheck!: boolean; //check's name 
  clicked: boolean = false;
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ageOrGenderClick'].currentValue !== 'undefined') {
      if (changes['ageOrGenderClick'].currentValue) {
        this.Disable();
      }
      else {
        if (changes['clicked_namecheck'].currentValue !== 'undefined')
          if (changes['clicked_namecheck'].currentValue)
            this.Enable();
      }
    }

  }


  onKey(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.onFilterName.emit(value);

  }
  Disable() {
    this.clicked = true;
  }
  Enable() {
    this.clicked = false;
  }

}
