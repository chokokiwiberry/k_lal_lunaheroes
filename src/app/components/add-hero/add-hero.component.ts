import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';
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
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  chosenGender(): string{
    return this.gender = this.heroService.chosenGender;

  }
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
    if (!this.chosenGender){
      alert('Si scelga un genere');
    }
    const newHero = {
      name: this.name,
      age: this.age,
      gender: this.chosenGender(),
      signs: this.signs,
      notes: this.notes
    }
    this.onAddHero.emit(newHero);

    this.name = ''
    
   this.heroService.sharedHero = newHero;

   //questa cosa deve essere in hero component
   this.heroService.addHero(newHero).subscribe( (hero) => (
    this.heroService.getHeroes(),
    this.onAddHero.emit(newHero)));

 
    
    }
 
  

}
