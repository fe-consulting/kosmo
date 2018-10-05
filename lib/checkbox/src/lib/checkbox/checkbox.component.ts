import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	ElementRef,
	Renderer2,
	HostBinding,
	AfterContentInit,
	Input,
	OnChanges,
} from '@angular/core';

const CHECKED = 'checked';

@Component({
	selector: '[k-checkbox], k-checkbox',
	templateUrl: './checkbox.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent implements AfterContentInit, OnChanges {
	private el: HTMLInputElement;

	@Input()
	public indeterminate = false;

	@HostBinding('class.disabled')
	public get disabled() {
		return this.el.disabled;
	}

	@HostBinding('class.active')
	public get active() {
		return this.el.checked || this.el.indeterminate;
	}

	@HostBinding('class.indeterminate')
	public get isIndeterminate() {
		return this.el.indeterminate;
	}

	constructor(
		private readonly ref: ElementRef,
		private readonly renderer: Renderer2
	) {}

	public ngOnChanges() {
		if (this.el) {
			this.el.indeterminate = this.indeterminate;
		}
	}

	public ngAfterContentInit() {
		this.el = this.ref.nativeElement.querySelector('input');
		this.el.indeterminate = this.indeterminate;

		if (!this.el) {
			throw new Error('Please provide an input checkbox');
		}
	}

	public toggle() {
		if (this.el.indeterminate) {
			this.el.indeterminate = false;
		}

		this.el.checked ? this.uncheck() : this.check();
	}

	private uncheck() {
		this.renderer.removeAttribute(this.el, CHECKED);
	}

	private check() {
		this.renderer.setAttribute(this.el, CHECKED, CHECKED);
	}
}
