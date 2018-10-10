import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartContenteditableDemoComponent } from './smart-contenteditable-demo/smart-contenteditable-demo.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const route: Route = {
	path: '',
	component: SmartContenteditableDemoComponent,
};

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([route]),
	],
	declarations: [SmartContenteditableDemoComponent],
	exports: [RouterModule],
})
export class SmartContenteditableDemoModule {}
