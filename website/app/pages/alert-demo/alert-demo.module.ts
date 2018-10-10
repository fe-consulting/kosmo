import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AlertDemoComponent } from './alert-demo.component';
import { AlertPrimaryDemoComponent } from './demos/alert-primary';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AlertModule } from '@kosmo/alert';

const route: Route = {
	path: '',
	component: AlertDemoComponent,
};

@NgModule({
	declarations: [AlertDemoComponent, AlertPrimaryDemoComponent],
	exports: [AlertDemoComponent, AlertPrimaryDemoComponent, RouterModule],
	imports: [
		CommonModule,
		AlertModule,
		SharedModule,
		RouterModule.forChild([route]),
	],
})
export class AlertDemoModule {}
