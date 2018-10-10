import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'k-arrow-icon',
	templateUrl: './arrow-icon.component.html',
	styleUrls: ['./arrow-icon.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class ArrowIconComponent {
	@HostBinding('class.down')
	@Input()
	public down = false;

	@HostBinding('style.height.px')
	@Input()
	public height = 24;

	@HostBinding('style.width.px')
	@Input()
	public width = 24;
}
