import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-get-started',
	templateUrl: './get-started.component.html',
	styleUrls: ['./get-started.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetStartedComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
