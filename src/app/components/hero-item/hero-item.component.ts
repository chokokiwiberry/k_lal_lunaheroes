import { Component, OnInit, Input } from '@angular/core';

//Hero è l'interfaccia della struttura dati Hero
import { Hero } from '../../Hero'

import { faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
//

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

//import il service per opendialog
import { HeroService } from 'src/app/services/hero.service';



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

  constructor( private heroService: HeroService) { 
    
  }
 
  

 
  ngOnInit(): void {
  }


  onEditHero(hero: Hero) {
    console.log('sono modifica');
    console.log(this.hero);
    this.heroService.openDialog(hero);
}
  onVisualizeHero(hero: Hero) {
    console.log('sono visualizza');
    console.log(this.hero);
    this.heroService.openDialog(hero);

  }
  onDeleteHero(hero: Hero) {
    console.log('sono cancella');
    console.log(this.hero);
    this.heroService.openDialog(hero);

  }

 
 

}
