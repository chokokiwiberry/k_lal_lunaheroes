import { Component, OnInit, Inject, ViewChild, TemplateRef, Input } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() bodytext: any;

  constructor( @Inject (MAT_DIALOG_DATA) public hero: Hero, private heroService: HeroService) { }

  ngOnInit(): void {
  
  }
  aggiorna(hero: Hero):void{
    console.log('sono aggiorna',hero)
  }

 
 



}
