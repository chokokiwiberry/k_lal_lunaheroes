import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-show-hero',
  templateUrl: './show-hero.component.html',
  styleUrls: ['./show-hero.component.css']
})
export class ShowHeroComponent implements OnInit {
  
  clicked: boolean = false;

  constructor(@Inject (MAT_DIALOG_DATA) public hero: Hero, ) { }

  ngOnInit(): void {
    this.clicked = true;
  }

}
