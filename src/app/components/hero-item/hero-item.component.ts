import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

//Hero è l'interfaccia della struttura dati Hero
import { Hero } from '../../Hero'

import { faTrash, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';


import { ModalService } from 'src/app/services/modal.service';
//import il service per opendialog

import { HeroService } from 'src/app/services/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteHeroComponent } from '../delete-hero/delete-hero.component';
import { EditHeroComponent } from '../edit-hero/edit-hero.component';



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


  @Output() onLoadDelete: EventEmitter<Hero> = new EventEmitter();
  @Output() onLoadEdit: EventEmitter<Hero> = new EventEmitter();

  constructor(private heroService: HeroService, private modalService: ModalService, public dialog: MatDialog,) {

  }


  ngOnInit(): void {
  }


  onEditHero(hero: Hero) {
    console.log('sono modifica');
    console.log(this.hero);
    const dialogRef = this.dialog.open(EditHeroComponent, {
      width: '450px',
      data: hero
    })
    const sub = dialogRef.componentInstance.onEditHero.subscribe((herodata) => {
      console.log('sono delete hero subscribe emit, hero', herodata);
      this.onLoadEdit.emit(herodata);
    });
    return dialogRef.afterClosed();
  }

  
  onVisualizeHero(hero: Hero) {
    console.log('sono visualizza');
    console.log(this.hero);
    this.modalService.loadVisualize(hero);
  }


  onDeleteHero(hero: Hero) {
    console.log('sono cancella');
    console.log(this.hero);

    const dialogRef = this.dialog.open(DeleteHeroComponent, {
      width: '450px',
      data: hero
    })

    const sub = dialogRef.componentInstance.onDeleteHero.subscribe((herodata) => {
      console.log('sono delete hero subscribe emit, hero', herodata);
      this.onLoadDelete.emit(herodata);
    });
    return dialogRef.afterClosed();
  }




}
