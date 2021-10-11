import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filter-name',
  templateUrl: './filter-name.component.html',
  styleUrls: ['./filter-name.component.css']
})
export class FilterNameComponent implements OnInit{
  @Output() onFilterName: EventEmitter<string> = new EventEmitter();
  //age or gender checked 
  //check's name 
  clicked: boolean = false;
  faSearch = faSearch;

  @Input()
  set ageOrGenderClick(value: any) {
   if(value) {
        this.Disable();
   }
}

@Input() 
  set clicked_namecheck(value: any){
    if (value){
      this.Enable();
    }
}

  constructor() { }

  ngOnInit(): void {
    this.Disable();
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
