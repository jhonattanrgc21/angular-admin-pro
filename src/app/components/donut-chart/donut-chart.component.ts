import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
	selector: 'app-donut-chart',
	templateUrl: './donut-chart.component.html',
	styles: [
	]
})
export class DonutChartComponent {

	@Input() title: string = 'Sin titulo';
	@Input('labels') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	@Input() data: number[] = [350, 450, 100];

	doughnutChartData: ChartData<'doughnut'> = {
		labels: this.doughnutChartLabels,
		datasets: [
			{ data: this.data }
		]
	};
	@Input() doughnutChartType: ChartType = 'doughnut';

	// events
	chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
		console.log(event, active);
	}

	chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
		console.log(event, active);
	}
}
