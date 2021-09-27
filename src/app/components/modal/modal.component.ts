import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( @Inject (MAT_DIALOG_DATA) public hero: Hero) { }

  ngOnInit(): void {
    
  }
  aggiorna(hero: Hero):void{
    console.log('sono aggiorna',hero)
  }






}
