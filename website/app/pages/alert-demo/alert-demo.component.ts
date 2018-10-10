import { ChangeDetectionStrategy, Component } from '@angular/core';

function getCode(path: string) {
	// @ts-ignore
	return (require as any)('!!raw-loader?lang=typescript!./demos/' + path);
}

@Component({
	selector: 'app-alert-demo',
	templateUrl: './alert-demo.component.html',
	styleUrls: ['./alert-demo.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDemoComponent {
	public demos = {
		alertPrimary: {
			template: getCode('alert-primary/alert-primary.html'),
		},
	};
}
