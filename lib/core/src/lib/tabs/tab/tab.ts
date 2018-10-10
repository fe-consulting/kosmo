import { EventEmitter, HostBinding, Input, Output } from '@angular/core';

export abstract class Tab {
	private _active = false;

	@Input()
	public readonly heading: string;

	@Output()
	private readonly select = new EventEmitter();

	@Output()
	private readonly deselect = new EventEmitter();

	@HostBinding('class.active')
	public get isActive() {
		return this._active;
	}

	@Input()
	public set active(active: boolean) {
		this._active = active;

		this.emit();
	}

	private emit() {
		(this.isActive ? this.select : this.deselect).emit(this);
	}
}
