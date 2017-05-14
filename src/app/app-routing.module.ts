import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarvelHeroesComponent }  from './marvel-heroes.component';

const routes: Routes = [
	{ path: '', redirectTo: '/marvel', pathMatch: 'full' },
  { path: 'marvel',     component: MarvelHeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
