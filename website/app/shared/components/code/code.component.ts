import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-code',
	templateUrl: './code.component.html',
	styleUrls: ['./code.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
	@Input()
	public component: string;
	@Input()
	public template: string;
	@Input()
	public style: string;
}
