import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animatins';
import { WEB_NAME, WEB_LOGO } from '../../config/config';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [ slideInAnimation ]
})
export class AppComponent {
	public getAnimationData(outlet: RouterOutlet) {
		return (
			outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData['animation']
		);
	}

	public webName = WEB_NAME;
	public logoUrl = WEB_LOGO;
}
