import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styles: [
	]
})
export class BreadcrumbsComponent implements OnDestroy {
	title: string = '';
	titleSubs$: Subscription;

	constructor(private _router: Router) {
		this.titleSubs$ = this.getArgumentsRoute().subscribe(data => {
			this.title = data['title'],
				document.title = `AdminPro - ${this.title}`;
		});;
	}

	getArgumentsRoute() {
		return this._router.events.pipe(
			filter((event: any) => event instanceof ActivationEnd),
			filter((event: ActivationEnd) => event.snapshot.firstChild === null),
			map((event: ActivationEnd) => event.snapshot.data)
		)
	}

	ngOnDestroy(): void {
		this.titleSubs$.unsubscribe();
	}
}
