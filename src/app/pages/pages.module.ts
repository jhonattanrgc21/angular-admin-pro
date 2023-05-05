import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfountComponent } from './notfount/notfount.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';



@NgModule({
	declarations: [
		PagesComponent,
		DashboardComponent,
		NotfountComponent,
		ProgressComponent,
		Grafica1Component,
	],
	imports: [
		CommonModule,
		SharedModule,
		PagesRoutingModule
	],
	exports: [
		PagesComponent,
		DashboardComponent,
		NotfountComponent,
		ProgressComponent,
		Grafica1Component
	]
})
export class PagesModule { }
