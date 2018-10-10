import { NgModule } from '@angular/core';
import { SmartContentEditableDirective } from './smart-contenteditable.directive';

@NgModule({
	declarations: [SmartContentEditableDirective],
	exports: [SmartContentEditableDirective],
})
export class SmartContentEditableModule {}
