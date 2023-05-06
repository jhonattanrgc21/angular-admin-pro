import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-incrementer',
	templateUrl: './incrementer.component.html',
	styles: [
	]
})
export class IncrementerComponent {
	@Input() progress: number = 40;
	@Input() btnClass: string = 'btn btn-primary';
	@Output() returnProgress: EventEmitter<number> = new EventEmitter<number>();

	changeProgress(value: number){
		if(this.progress >= 100 && value >= 0){
			this.returnProgress.emit(100);
		}

		if(this.progress <= 0 && value < 0){
			this.returnProgress.emit(0);
		}

		this.returnProgress.emit(this.progress += value);
	}

	onChange(newValue: number){
		if(newValue >= 100) this.progress = 100;
		if(newValue < 0) this.progress = 0;
		else this.progress = newValue;

		this.returnProgress.emit(this.progress);
	}
}
