import { NgModule } from '@angular/core';
import { ExpansionTabsComponent } from './expansion-tabs.component';
import { ExpansionTabDirective } from './expansion-tab/expansion-tab-directive.component';
import { CommonModule } from '@angular/common';
import { KosmoCoreModule } from '@kosmo/core';

@NgModule({
	imports: [CommonModule, KosmoCoreModule],
	declarations: [ExpansionTabsComponent, ExpansionTabDirective],
	exports: [ExpansionTabsComponent, ExpansionTabDirective],
})
export class ExpansionTabsModule {}
