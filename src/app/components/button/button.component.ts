import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
//button che clicca e apre modale e quando c'è il button submit
//devo creare l'oggetto 
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }


 /* openModal(){
    this.heroService.openModal();
  }
 */

}
