import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
	selector: 'app-account-settings',
	templateUrl: './account-settings.component.html',
	styles: [
	]
})
export class AccountSettingsComponent implements OnInit {
	constructor(private _settingsServis: SettingsService){
	}

	ngOnInit(): void {
		this._settingsServis.checkCurrentTheme();
	}

	changeTheme(theme: string) {
		this._settingsServis.changeTheme(theme);
	}
}
