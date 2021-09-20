import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes =[
  {path: '', component: LoginComponent},
  {path: 'heroes', component: HeroesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeroesComponent,
    HeroItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
