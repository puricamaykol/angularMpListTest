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


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule

  ],
  declarations: [
    AppComponent,
    MarvelHeroesComponent,
    MpList,
    MpListItemDescriptionPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
