import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
	{
		path: 'dashboard',
		component: PagesComponent,
		children: [
			{path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
			{path: 'progress', component: ProgressComponent, data: {title: 'ProgressBar'}},
			{path: 'grafica1', component: Grafica1Component, data: {title: 'Grafica1'}},
			{path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
		]
	}
]

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
