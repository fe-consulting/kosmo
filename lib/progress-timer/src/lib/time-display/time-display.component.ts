import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'time-display',
    templateUrl: './time-display.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeDisplayComponent {
    @Input() public minutes: number;
    @Input() public seconds: number;
}
