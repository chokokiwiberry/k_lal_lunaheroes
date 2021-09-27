import { Injectable } from '@angular/core';

import {Hero} from '../Hero'
import {HEROES} from '../mock-heroes'


import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
// importo la componente modal qui
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
 
})
export class HeroService {
  sharedData!: any;
  tableData!: any;



  constructor(public dialog: MatDialog) { }

  getHeroes(): Hero[]{
    return HEROES;
  }

  deleteHero(hero: Hero){
    console.log('cancella')
  }




//prova modal 
  openDialog(hero: Hero) {
    console.log('sono in service',hero)
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      height: '500px',
        data: hero});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
