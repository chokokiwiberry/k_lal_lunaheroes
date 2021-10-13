
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/Hero';
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

  dataHero!: Hero;



  constructor(@Inject(MAT_DIALOG_DATA) public hero: Hero) { }

  ngOnInit(): void {
    this.clicked = true;
    this.name = this.hero.name;
    this.age = this.hero.age;
    this.gender = this.hero.gender;
    this.signs = this.hero.signs;
    this.notes = this.hero.notes;
    this.dataHero = this.hero;
  }


  checkToEnable() {
    this.dataHero = this.hero;
    if (this.clicked) {
      this.clicked = false; 
    }
    else this.clicked = true;
  }
  chosenGender(string: any): string {
    return this.gender = string;
  }

  EditHero() {
    const updatedHero = {
      id: this.hero.id,
      name: this.name,
      age: this.age,
      gender: this.gender,
      signs: this.signs,
      notes: this.notes

    }
    
    this.onEditHero.emit(updatedHero);

  }

}
