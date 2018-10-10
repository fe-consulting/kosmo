import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'k-side-nav-section',
	templateUrl: './side-nav-section.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class SideNavSectionComponent {
	@Input()
	public open = true;

	@Input()
	public heading: string;

	@Output()
	public change = new EventEmitter();

	public toggle() {
		this.open = !this.open;

		this.change.emit(this.open);
	}
}
