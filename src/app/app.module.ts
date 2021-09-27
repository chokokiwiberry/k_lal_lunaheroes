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
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { SelectGenderComponent } from './components/select-gender/select-gender.component';
import { FilterNameComponent } from './components/filter-name/filter-name.component';
import { FilterAgeComponent } from './components/filter-age/filter-age.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';


const appRoutes : Routes =[
  {path: '', component: LoginComponent},
  {path: 'heroes', component: HeroesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeroesComponent,
    HeroItemComponent,
    AddHeroComponent,
    HeaderComponent,
    FilterComponent,
    SelectGenderComponent,
    FilterNameComponent,
    FilterAgeComponent,
    ModalComponent,
    ButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule, 
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatInputModule, 
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    
   
  ],
  
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
