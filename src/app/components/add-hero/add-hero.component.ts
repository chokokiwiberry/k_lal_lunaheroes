import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})

//si potrebbe fare che add-hero component faccia sia da add che da edit 
export class AddHeroComponent implements OnInit {
  @Output() onAddHero: EventEmitter<Hero> = new EventEmitter();

    name!: string;
    age!: number;
    gender!: string;
    signs!: string;
    notes!: string;

    heroes!: any;

  constructor() { }

  ngOnInit(): void {
  }

  chosenGender(string: any): string{
    return this.gender = string; 

  }
  //quando l'utente clicca salva, c'è la funzione addHero
  AddHero(){
    console.log('sono add hero in add component hero')
    if (!this.name){
      alert('Il nome è obbligatorio');
      return;
    }
    if (!this.age){
      alert('Inserire un un\'\ età');
      return;
    } 
    if (!this.gender){
      alert('Si scelga un genere');
    }
    const newHero = {
      name: this.name,
      age: this.age,
      gender: this.gender,
      signs: this.signs,
      notes: this.notes
    }
    this.onAddHero.emit(newHero);

    this.name = ''
    

 
    }
 
  

}
