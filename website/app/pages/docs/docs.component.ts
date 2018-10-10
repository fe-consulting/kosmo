import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-docs',
	templateUrl: './docs.component.html',
	styleUrls: ['./docs.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
