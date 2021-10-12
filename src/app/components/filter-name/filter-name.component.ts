import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filter-name',
  templateUrl: './filter-name.component.html',
  styleUrls: ['./filter-name.component.css']
})
export class FilterNameComponent implements OnInit{
  @Output() onFilterName: EventEmitter<string> = new EventEmitter();
  clicked: boolean = false;
  faSearch = faSearch;

  @Input()
  set ageOrGenderClick(value: any) {//age or gender checked 
   if(value) {
        this.Disable();
   }
}

@Input() 
  set clicked_namecheck(value: any){  //check's name 
    if (value){
      this.Enable();
    } else{
      this.Disable();
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
  Disable() { //disable input
    this.clicked = true;
  }
  Enable() { //enable input
    this.clicked = false;
  }

}
