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

  //template

  constructor() { }

  ngOnInit(): void {
  }


  onEditHero(hero: Hero) {
    console.log('sono modifica');
    console.log(this.hero);
  }
  onVisualizeHero(hero: Hero) {
    console.log('sono visualizza');
    console.log(this.hero);
  }
  onDeleteHero(hero: Hero) {
    console.log('sono cancella');
    console.log(this.hero);
  }

 
 

}
