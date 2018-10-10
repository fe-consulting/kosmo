import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'k-time-display',
	templateUrl: './time-display.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeDisplayComponent {
	@Input()
	public minutes: number;
	@Input()
	public seconds: number;
}
