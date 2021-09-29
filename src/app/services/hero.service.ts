import {  Injectable } from '@angular/core';

import {Hero} from '../Hero'
import {HEROES} from '../mock-heroes'


import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Injectable({
  providedIn: 'root'
 
})
export class HeroService {
  sharedData!: any;
  tableData!: any;

  chosenGender!: string;



  constructor(public dialog: MatDialog) { }

  getHeroes(): Hero[]{
    return HEROES;
  }

  deleteHero(hero: Hero){
    console.log('cancella')
  }

  addHero(newHero: Hero){
    console.log(newHero);
    HEROES.push(newHero);
    console.log(HEROES);

  }


//prova modal 
 /* openDialog(hero: Hero) {
    console.log('sono in service',hero)
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '500px',
        data: hero});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } */














}
