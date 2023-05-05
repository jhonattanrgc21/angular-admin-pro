import { Component } from '@angular/core';

@Component({
  selector: 'app-notfount',
  templateUrl: './notfount.component.html',
  styleUrls: [ './notfound.component.css'
  ]
})
export class NotfountComponent {
	year: number = new Date().getFullYear();
}
