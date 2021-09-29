import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { isThisTypeNode } from 'typescript';


//service 
import {HeroService} from '../../services/hero.service'
@Component({
  selector: 'app-select-gender',
  templateUrl: './select-gender.component.html',
  styleUrls: ['./select-gender.component.css']
})
export class SelectGenderComponent implements OnInit {

  form = new FormGroup({
    gender : new FormControl(),
  });
 //idea: voglio passare il valore dal child, che è selectGender al padre che è heroes
  @Output() newItemEvent = new EventEmitter<string>();

  //schema per la scelta del genere 
  genders =[
    {gender: 'M'},
    {gender: 'F'}
  ]
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
  }




getValue(): string{
  return this.heroService.sharedData;
}

setValue(event: Event){
  const element = event.target as HTMLInputElement;
  const value = element.value;
  this.heroService.sharedData = value;
}

filterGender(event: Event){
  const element = event.target as HTMLInputElement;
  const value = element.innerText; //per estrarre l'elemento dalla scelta option
  var results = [];
  if (value !== undefined || value !== null){
    for (var i = 0; i<this.heroService.tableData.length; i++){
      if (this.heroService.tableData[i].gender === value){
        results.push(this.heroService.tableData[i]);
      }
    }
  }
  this.heroService.tableData = results;
}
setGender(event: Event){
  const element = event.target as HTMLInputElement;
  this.heroService.chosenGender = element.innerText;
}

}
