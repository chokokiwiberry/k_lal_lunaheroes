import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../../Hero'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input()
  hero!: Hero;
faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  onEditHero(){

  }
  onVisualizeHero(){

  }
  onDeleteHero(hero: Hero){
    console.log('ciao');
  }
}
