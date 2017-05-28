import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarvelHeroesComponent } from './marvel-heroes.component';
import { LoginComponent } from './login/login.component';
import { LoginCbComponent } from './login-cb/login-cb.component';

const routes: Routes = [
	{ path: '', redirectTo: '/marvel', pathMatch: 'full' },
	{ path: 'marvel', component: MarvelHeroesComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'logincb', component: LoginCbComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
