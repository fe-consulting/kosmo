import {NgModule} from '@angular/core';
import {ProgressTimerComponent} from './progress-timer.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { TimeDisplayComponent } from './time-display/time-display.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule
    ],
    declarations: [ProgressTimerComponent, TimeDisplayComponent],
    exports: [ProgressTimerComponent]
})
export class ProgressTimerModule {
}
