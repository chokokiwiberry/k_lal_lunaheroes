
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
name!: string;
age!: number;
gender!: string; 
signs!: string; 
notes!: string; 
clicked: boolean = false;
  constructor(@Inject (MAT_DIALOG_DATA) public hero: Hero ) { }

  ngOnInit(): void {
    this.clicked = true;
  }

  chosenGender(){

  }
  EditHero(){

  }

}
