import { Component, OnInit,  Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';



//service 
import {HeroService} from '../../services/hero.service'
@Component({
  selector: 'app-select-gender',
  templateUrl: './select-gender.component.html',
  styleUrls: ['./select-gender.component.css']
})
export class SelectGenderComponent implements OnInit, OnChanges {

  form = new FormGroup({
    gender : new FormControl(),
  });
 //idea: voglio passare il valore dal child, che è selectGender al padre che è heroes
 @Output() onFilterGender: EventEmitter<string> = new EventEmitter();
 @Input () genderChecked!: boolean;
clicked!: boolean;
  //schema per la scelta del genere 
  genders =[
    {gender : ''},
    {gender: 'M'},
    {gender: 'F'}
  ]
  constructor() { }

  ngOnInit(): void {
    this.clicked = true;
  }


  ngOnChanges(changes: SimpleChanges): void {
    //console.log('sono changes di name',typeof(changes.genderChecked.currentValue));
  //  console.log(changes['genderChecked'].currentValue);
    if (changes['genderChecked'].currentValue){
    //  console.log('entra');
      
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }


filterGender(event: Event){
  const element = event.target as HTMLInputElement;
  const value = element.innerText;
  this.onFilterGender.emit(value);
}


}
