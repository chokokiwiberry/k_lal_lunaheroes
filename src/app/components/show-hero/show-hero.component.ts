import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-show-hero',
  templateUrl: './show-hero.component.html',
  styleUrls: ['./show-hero.component.css']
})
export class ShowHeroComponent implements OnInit {
  name!: string;
  age!: number;
  gender!: string;
  signs!: string;
  notes!: string;
  
  clicked: boolean = false;

  constructor(@Inject (MAT_DIALOG_DATA) public hero: Hero, ) { }

  ngOnInit(): void {
    this.clicked = true;
    this.name = this.hero.name;
    this.age = this.hero.age;
    this.gender = this.hero.gender;
    this.signs = this.hero.signs;
    this.notes = this.hero.notes;
  }

}
