import {EventEmitter, HostBinding, Input, Output} from "@angular/core";

export abstract class Tab {
    private _active = false;

    @Input() public heading: string;

    @Output() private select = new EventEmitter();
    @Output() private deselect = new EventEmitter();

    @HostBinding('class.active')
    public get active() {
        return this._active;
    }

    public set active(active: boolean) {
        this._active = active;
    }

    private emit() {
        (this.active ? this.select : this.deselect).emit(this);
    }
}
