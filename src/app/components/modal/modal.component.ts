import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/Hero';
import { AddHeroComponent } from '../add-hero/add-hero.component';

import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 
  @Output() onLoadAdd: EventEmitter<Hero> = new EventEmitter();

  enableselect!: boolean;
  
 
  constructor(public dialog: MatDialog) { }

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
    
    });
    return dialogRef.afterClosed();

  }

}
