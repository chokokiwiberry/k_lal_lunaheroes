import { Component, OnInit, Inject, ViewChild, TemplateRef, Input, ComponentFactoryResolver } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalDirective } from 'ng-uikit-pro-standard';


import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';


import { AddHeroComponent } from '../add-hero/add-hero.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() hero_item: any; //prende in input un oggetto hero_item che è contenuto che verrà mostrato a schermo

@ViewChild(ModalDirective, {static: true}) appModal!: ModalDirective;

  constructor( @Inject (MAT_DIALOG_DATA) public hero: Hero, 
                private heroService: HeroService,
                private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  
  }

  // load component deve caricare la componente a seconda del click
  loadComponent(){

   
  }
 

 
 



}
