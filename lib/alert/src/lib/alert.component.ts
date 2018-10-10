import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnDestroy,
	OnInit,
	Renderer2,
	ViewContainerRef,
	ViewEncapsulation,
} from '@angular/core';

import { Subscription, timer } from 'rxjs';

@Component({
	selector: 'k-alert, [k-alert]',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './alert.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent implements OnDestroy, OnInit {
	private subscription: Subscription;

	@Input()
	public readonly dismiss = true;

	@Input()
	public readonly dismissOnTimeout: number;

	constructor(
		private readonly ref: ViewContainerRef,
		private readonly renderer: Renderer2
	) {}

	public ngOnInit() {
		if (this.dismissOnTimeout) {
			this.createDismissTimeout();
		}
	}

	public close() {
		this.ref.clear();
		const el = this.ref.element.nativeElement;
		this.renderer.removeChild(el.parentElement, el);
		this.ngOnDestroy();
	}

	public ngOnDestroy() {
		if (this.subscription && !this.subscription.closed) {
			this.subscription.unsubscribe();
		}
	}

	private createDismissTimeout() {
		const timer$ = timer(this.dismissOnTimeout);
		this.subscription = timer$.subscribe(() => this.close());
	}
}
