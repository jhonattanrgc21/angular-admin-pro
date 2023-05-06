import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SettingsService {
	private _linkTheme = document.querySelector('#theme');
	private _links?: NodeListOf<Element>;

	constructor() {
		const url = localStorage.getItem("theme") || 'assets/css/colors/purple-dark.css';
		this._linkTheme?.setAttribute('href', url);
	}


	changeTheme(theme: string) {
		const url = `assets/css/colors/${theme}.css`;
		this._linkTheme?.setAttribute('href', url);
		localStorage.setItem("theme", url);
		this.checkCurrentTheme();
	}

	checkCurrentTheme() {
		const links: NodeListOf<Element> = document.querySelectorAll('.selector');;
		links?.forEach(link => {
			link.classList.remove('working');
			const btnTheme = link.getAttribute('data-theme');
			const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
			const currentTheme = this._linkTheme?.getAttribute('href');

			if (currentTheme === btnThemeUrl) {
				link.classList.add('working');
			}
		})
	}

}
