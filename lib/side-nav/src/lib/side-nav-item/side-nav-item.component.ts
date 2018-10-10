import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'k-side-nav-item',
	template: '<ng-content></ng-content>',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class SideNavItemComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
