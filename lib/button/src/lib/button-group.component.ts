import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '[k-button-group], k-button-group',
    encapsulation: ViewEncapsulation.None,
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGroupComponent { }
