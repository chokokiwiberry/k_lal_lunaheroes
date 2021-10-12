import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-gender',
  templateUrl: './filter-gender.component.html',
  styleUrls: ['./filter-gender.component.css']
})
export class FilterGenderComponent implements OnInit {

  form = new FormGroup({
    gender: new FormControl(),
  });

  @Output() onFilterGender: EventEmitter<string> = new EventEmitter();
  @Input()
  set clicked_gendercheck(value: any) {
    if (value) {
      this.Enable();
    } else{
      this.Disable();
    }
  }
  @Input()
  set nameOrAgeClick(value: any) {//name or age checked 
    if (value) {
      this.Disable();
    }
  }
  clicked!: boolean;
  //schema per la scelta del genere 
  genders = [
    { gender: '' },
    { gender: 'M' },
    { gender: 'F' }
  ]
  constructor() { }

  ngOnInit(): void {

  }
  Enable() {
    this.clicked = false;
  }
  Disable() {
    this.clicked = true;
  }

  filterGender(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.innerText;
    this.onFilterGender.emit(value);
  }


}
