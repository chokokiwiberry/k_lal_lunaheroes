
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Form, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Output() onEditHero: EventEmitter<Hero> = new EventEmitter();
name!: string;
age!: number;
gender!: string; 
signs!: string; 
notes!: string; 
clicked: boolean = false;



  constructor(@Inject (MAT_DIALOG_DATA) public hero: Hero, private heroService: HeroService) { }

  ngOnInit(): void {
    this.clicked = true;
    this.name = this.hero.name;
    this.age = this.hero.age;
    this.gender = this.hero.gender;
    this.signs = this.hero.signs;
    this.notes = this.hero.notes;
    
  }

  chosenGender(): string{
    return this.gender = this.heroService.chosenGender;
  }

  checkToEnable(){
    if (this.clicked){
      this.clicked = false;
    } 
    else this.clicked = true;
  }

  EditHero(){
    const updatedHero = {
      id: this.hero.id,
      name: this.name,
      age: this.age,
      gender: this.chosenGender(),
      signs: this.signs,
      notes: this.notes

    }
    this.onEditHero.emit(updatedHero);

  }

}
