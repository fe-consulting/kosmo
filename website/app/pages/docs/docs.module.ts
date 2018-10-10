import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { SharedModule } from '../../shared/shared.module';
import { ProgressBarDemoComponent } from '../progress-bar-demo/progress-bar-demo.component';
import { ButtonDemoComponent } from '../button-demo/button-demo.component';
import { TabsDemoComponent } from '../tabs-demo/tabs-demo.component';
import { CheckboxDemoComponent } from '../checkbox-demo/checkbox-demo.component';
import { GetStartedComponent } from '../get-started/get-started.component';
import { DocsRoutingModule } from './docs-routing.module';

@NgModule({
	imports: [CommonModule, SharedModule, DocsRoutingModule],
	declarations: [
		DocsComponent,
		ProgressBarDemoComponent,
		ButtonDemoComponent,
		TabsDemoComponent,
		CheckboxDemoComponent,
		GetStartedComponent,
	],
	exports: [DocsRoutingModule],
})
export class DocsModule {}
