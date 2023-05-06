import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';



@NgModule({
	declarations: [
		IncrementerComponent,
		DonutChartComponent
	],
	imports: [
		CommonModule,
		NgChartsModule,
		FormsModule
	],
	exports: [IncrementerComponent, DonutChartComponent]
})
export class ComponentsModule { }
