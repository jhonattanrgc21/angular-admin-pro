import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SidebarService {

	menu: any[] = [
		{
			title: 'Dashboard',
			icon: 'mdi mdi-gauge',
			submenu: [
				{title:'Main', url: '/'},
				{title:'Progressbar', url: 'progress'},
				{title:'Graphics', url: 'grafica1'},
				{title:'Promises', url: 'promises'},
			]
		}
	]
	constructor() { }
}
