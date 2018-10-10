import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'k-side-nav, [kSidenav]',
	template: '<ng-content></ng-content>',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
