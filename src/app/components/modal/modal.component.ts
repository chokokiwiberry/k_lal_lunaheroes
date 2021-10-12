import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/Hero';
import { AddHeroComponent } from '../add-hero/add-hero.component';

import { HeroService } from 'src/app/services/hero.service';
import { DeleteHeroComponent } from '../delete-hero/delete-hero.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 
  @Output() onLoadAdd: EventEmitter<Hero> = new EventEmitter();

  @Output() onLoadDelete: EventEmitter<Hero> = new EventEmitter();

  enableselect!: boolean;
  
 
  constructor(public dialog: MatDialog, private heroService: HeroService) { }

  ngOnInit(): void {
  }

  loadAdd(): Observable<any> {
    this.enableselect = true;
    const dialogRef = this.dialog.open(AddHeroComponent, {
      width: '450px',
      data: this.enableselect
    })
 
   const sub = dialogRef.componentInstance.onAddHero.subscribe((hero) => {
      console.log('sono loadAdd subscribe emit, hero',hero);
 
      this.onLoadAdd.emit(hero);
      //this.onLoadAdd.emit();
      
    
    });
    
    
    /*dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); */
    return dialogRef.afterClosed();

  }
 
  






  loadDelete(): Observable<any> {
    const dialogRef = this.dialog.open(DeleteHeroComponent, {
      width: '450px',
    })
 
   const sub = dialogRef.componentInstance.onDeleteHero.subscribe((hero) => {
      console.log('sono loadAdd subscribe emit, hero',hero);
 
      this.onLoadDelete.emit(hero);
   
      
    
    });
    
    
    /*dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); */
    return dialogRef.afterClosed();

  }
}
