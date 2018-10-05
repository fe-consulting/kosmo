import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { TabsComponent } from './tabs/tabs.component';
import { TabDirective } from './tab/tab.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabDirective],
  exports: [TabsComponent, TabDirective]
})
export class TabsModule { }
