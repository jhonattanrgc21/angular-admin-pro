import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfountComponent } from './notfount/notfount.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
	declarations: [
		PagesComponent,
		DashboardComponent,
		NotfountComponent,
		ProgressComponent,
		Grafica1Component,
		AccountSettingsComponent,
	],
	imports: [
		CommonModule,
		NgChartsModule,
		SharedModule,
		PagesRoutingModule,
		ComponentsModule
	],
	exports: [
		PagesComponent,
		DashboardComponent,
		NotfountComponent,
		ProgressComponent,
		Grafica1Component,
		AccountSettingsComponent
	]
})
export class PagesModule { }
