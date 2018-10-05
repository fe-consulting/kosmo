import {
	ChangeDetectionStrategy,
	Component,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: '[k-button], k-button',
	encapsulation: ViewEncapsulation.None,
	template: '<ng-content></ng-content>',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
