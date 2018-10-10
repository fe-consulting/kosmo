import { NgModule } from '@angular/core';
import { ProgressTimerComponent } from './progress-timer.component';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';

@NgModule({
	imports: [CommonModule],
	declarations: [ProgressTimerComponent, TimeDisplayComponent],
	exports: [ProgressTimerComponent],
})
export class ProgressTimerModule {}
