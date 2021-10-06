import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
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

import { SelectGenderComponent } from './components/select-gender/select-gender.component';
import { FilterNameComponent } from './components/filter-name/filter-name.component';
import { FilterAgeComponent } from './components/filter-age/filter-age.component';
import { MatDialogModule } from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { ShowHeroComponent } from './components/show-hero/show-hero.component';
import { DeleteHeroComponent } from './components/delete-hero/delete-hero.component';
import { ModalComponent } from './components/modal/modal.component';



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
    SelectGenderComponent,
    FilterNameComponent,
    FilterAgeComponent,
    EditHeroComponent,
    ShowHeroComponent,
    DeleteHeroComponent,
    ModalComponent,

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
    HttpClientModule,
    CommonModule,
    NgxSliderModule
    
   
  ],
  
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [AddHeroComponent, EditHeroComponent, ShowHeroComponent, DeleteHeroComponent]
})
export class AppModule { }
