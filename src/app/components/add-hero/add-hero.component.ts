import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';
import { CommonModule }     from '@angular/common';
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

    show: boolean = false;
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
   this.heroService.addHero(newHero).subscribe(success =>{
     console.log('sono success di addherocomponent ',success);
   
    //qui deve fare anche il getdata() di hero components



     //this.heroService.getHeroes();
    /*this.heroService.getHeroes().subscribe((response: Hero[])=>{
      this.heroes = response; 
   }) */

    
  })
 

   //questa cosa deve essere in hero component
   /*this.heroService.addHero(newHero).subscribe( (hero) => (
     
    this.onAddHero.emit(newHero)));

  */
    
    }
 
  

}
