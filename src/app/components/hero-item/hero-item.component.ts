import { Component, OnInit } from '@angular/core';
import {Hero} from '../../Hero'

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  onEditHero(){

  }
  onVisualizeHero(){

  }
  onDeleteHero(){

  }
}
