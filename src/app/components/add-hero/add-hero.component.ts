import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})

//si potrebbe fare che add-hero component faccia sia da add che da edit 
export class AddHeroComponent implements OnInit {
    name_hero!: string;
    age_hero!: number;
    gender_hero!: string;
    signs_hero!: string;
    notes_hero!: string;

  constructor() { }

  ngOnInit(): void {
  }
  AddHero(){
    console.log('prova')
  }

}
