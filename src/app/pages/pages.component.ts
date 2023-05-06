import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitiFunction(): void;
@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styles: [
	]
})
export class PagesComponent implements OnInit {

	constructor(private _settingsServis: SettingsService) {
	}

	ngOnInit(): void {
		customInitiFunction();
	}

}
