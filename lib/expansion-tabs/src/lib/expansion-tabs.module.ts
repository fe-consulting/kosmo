import { NgModule } from '@angular/core';
import { ExpansionTabsComponent } from './expansion-tabs.component';
import { ExpansionTabDirective } from './expansion-tab/expansion-tab-directive.component';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [ExpansionTabsComponent, ExpansionTabDirective],
  exports: [ExpansionTabsComponent, ExpansionTabDirective]
})
export class ExpansionTabsModule { }
