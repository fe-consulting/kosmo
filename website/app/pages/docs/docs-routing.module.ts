import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProgressBarDemoComponent } from '../progress-bar-demo/progress-bar-demo.component';
import { ButtonDemoComponent } from '../button-demo/button-demo.component';
import { TabsDemoComponent } from '../tabs-demo/tabs-demo.component';
import { CheckboxDemoComponent } from '../checkbox-demo/checkbox-demo.component';
import { DocsComponent } from './docs.component';

const defaultRoute: Route = {
	path: '',
	pathMatch: 'full',
	redirectTo: 'button',
};

const progressBarDemo: Route = {
	path: 'progress-bar',
	component: ProgressBarDemoComponent,
};

const alertDemo: Route = {
	path: 'alert',
	loadChildren: '../alert-demo/alert-demo.module#AlertDemoModule',
};

const smartContentEditableDemo: Route = {
	path: 'smart-contenteditable',
	loadChildren:
		'../smart-contenteditable-demo/smart-contenteditable-demo.module#SmartContenteditableDemoModule',
};

const buttonsDemo: Route = {
	path: 'button',
	component: ButtonDemoComponent,
};

const tabsDemo: Route = {
	path: 'tabs',
	component: TabsDemoComponent,
};

const checkboxesDemo: Route = {
	path: 'checkbox',
	component: CheckboxDemoComponent,
};

const route: Route = {
	path: '',
	component: DocsComponent,
	children: [
		defaultRoute,
		progressBarDemo,
		checkboxesDemo,
		tabsDemo,
		buttonsDemo,
		alertDemo,
		smartContentEditableDemo,
	],
};

@NgModule({
	imports: [RouterModule.forChild([route])],
	exports: [RouterModule],
})
export class DocsRoutingModule {}
