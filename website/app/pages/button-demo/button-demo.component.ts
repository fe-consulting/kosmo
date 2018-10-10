import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button-demo',
	templateUrl: './button-demo.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
