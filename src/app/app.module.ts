import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }         from './app.component';
import { MarvelHeroesComponent }  from './marvel-heroes.component';
import { MpList }  from './mp-list.component';

//import del componente de listado

import { MaterialModule } from '@angular/material';

import { MpListItemDescriptionPipe }  from './item-description.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { LoginCbComponent } from './login-cb/login-cb.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule

  ],
  declarations: [
    AppComponent,
    MarvelHeroesComponent,
    MpList,
    MpListItemDescriptionPipe,
    HeroDetailComponent,
    LoginComponent,
    LoginCbComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
