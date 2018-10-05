import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {ProgressTimerComponent} from "../../../../lib/progress-timer/src/lib/progress-timer.component";

@Component({
    selector: 'app-progress-bar-demo',
    templateUrl: './progress-bar-demo.component.html',
    styleUrls: ['./progress-bar-demo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarDemoComponent {
    public time = 100000;

    @ViewChild('timer')
    public timer: ProgressTimerComponent;

    public pause() {
        this.timer.pause();
    }

    public resume() {
        this.timer.resume();
    }

    public start() {
        this.timer.start();
    }

    public reset() {
        this.timer.reset();
    }

}
