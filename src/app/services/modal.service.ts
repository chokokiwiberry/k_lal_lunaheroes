import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hero } from '../Hero';
import { AddHeroComponent } from '../components/add-hero/add-hero.component';
import { EditHeroComponent } from '../components/edit-hero/edit-hero.component';
import { ShowHeroComponent } from '../components/show-hero/show-hero.component';
import { DeleteHeroComponent } from '../components/delete-hero/delete-hero.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }


  loadAdd() {
    const dialogRef = this.dialog.open(AddHeroComponent, {
      width: '450px',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  loadEdit(hero: Hero) {
    const dialogRef = this.dialog.open(EditHeroComponent, {
      width: '450px',
      data: hero
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  loadVisualize(hero: Hero) {
    const dialogRef = this.dialog.open(ShowHeroComponent, {
      width: '450px',
      data: hero
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  loadDelete(hero: Hero) {
    const dialogRef = this.dialog.open(DeleteHeroComponent, {
      width: '450px',
      data: hero
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}




