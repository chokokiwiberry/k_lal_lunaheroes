import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../Hero'
import { faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input()
  hero!: Hero;

  

//icone
  faTrash = faTrash;
  faEdit = faEdit;
  faEye = faEye;

  constructor() { }

  ngOnInit(): void {
  }
  onEditHero() {

  }
  onVisualizeHero() {

  }
  onDeleteHero(hero: Hero) {
    console.log('ciao');
  }

}
