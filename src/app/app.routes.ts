// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'home-page',
		pathMatch: 'full'
	},
	{
		path: 'home-page',
		loadChildren: () => import('./pages/home/home-page.module').then(m => m.HomePageModule)
	},
	{
		path: 'contact',
		loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
	},
	{
		path: 'not-found',
		loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
	},
	{
		path: '**',
		redirectTo: 'not-found'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
