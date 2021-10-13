import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
  }
  Entra() {
    console.log('click');
    if (this.heroService.loggedIn === false) {
      if ((this.username === 'admin') && this.password === 'password') {
        this.heroService.loggedIn = true;
        this.router.navigateByUrl('/heroes');
      }
      else {
        alert('Hai sbagliato utente e/o password, riprova!');
        this.router.navigateByUrl('/')
      }
    }
  }

}
