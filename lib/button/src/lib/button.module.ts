import { ButtonGroupComponent } from './button-group.component';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [ ],
  declarations: [ButtonComponent, ButtonGroupComponent],
    exports: [ButtonComponent, ButtonGroupComponent]
})
export class ButtonModule { }
