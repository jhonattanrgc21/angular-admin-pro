import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
	selector: 'app-grafica1',
	templateUrl: './grafica1.component.html',
	styles: [
	]
})
export class Grafica1Component {
	labels: string[] = ['Pruebas', 'In-Store Sales', 'Mail-Order Sales'];
	data1 = [2, 2, 4];
}
