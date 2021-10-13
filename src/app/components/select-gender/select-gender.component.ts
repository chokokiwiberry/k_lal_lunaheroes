import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-select-gender',
  templateUrl: './select-gender.component.html',
  styleUrls: ['./select-gender.component.css']
})
export class SelectGenderComponent implements OnInit {

  form = new FormGroup({
    gender: new FormControl(),
  });
  genderVal!: string;
  
  //idea: voglio passare il valore dal child, che è selectGender al padre che è heroes
  @Output() onFilterGender: EventEmitter<string> = new EventEmitter();
  @Output() onShowingGender: EventEmitter<string> = new EventEmitter();
  @Input()
  set clicked_edit(value: any) {
    if (value) {
      this.Disable();
      
    } else {
      this.Enable();
    };
   console.log(this.selectedGender)
  }
  @Input()
  set clicked_addbtn(value: any) {
    if (value) {
      this.Enable()
    } else {
      this.Disable()
    }
  }
  @Input('dataHero')
    set data(data: any) {
       this.selectedGender = data.gender;
    }

 
  clicked!: boolean;
  //schema per la scelta del genere 
  genders = [
    { gender: '' },
    { gender: 'M' },
    { gender: 'F' }
  ]


  selectedGender!: string;

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
