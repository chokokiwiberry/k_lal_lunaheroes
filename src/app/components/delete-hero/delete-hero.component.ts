import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.css']
})
export class DeleteHeroComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public hero: Hero, private heroService: HeroService  ) { }

  ngOnInit(): void {
  }
  boh(){
    console.log('clicca');
  }
  onDelete(toDeleteHero: Hero){
  
    console.log('sono sì di modal deletecomponent', toDeleteHero);
    this.heroService.deleteHero(toDeleteHero).subscribe(success =>{
      console.log(success);
    })
  }

}
