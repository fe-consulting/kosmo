import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './components/code/code.component';

// kosmo
import { ProgressTimerModule } from '@kosmo/progress-timer';
import { ButtonModule } from '@kosmo/button';
import { TabsModule } from '@kosmo/tabs';
import { ExpansionTabsModule } from '@kosmo/expansion-tabs';
import { CheckboxModule } from '@kosmo/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SideNavModule } from '@kosmo/side-nav';
import { KosmoCoreModule } from '@kosmo/core';
import { FooterComponent } from './components/footer/footer.component';
import { SmartContentEditableModule } from '@kosmo/smart-contenteditable';

@NgModule({
	imports: [
		CommonModule,
		ProgressTimerModule,
		ButtonModule,
		TabsModule,
		ExpansionTabsModule,
		CheckboxModule,
		SideNavModule,
		FlexLayoutModule,
		RouterModule,
		KosmoCoreModule,
	],
	declarations: [
		CodeComponent,
		HeaderComponent,
		SidebarComponent,
		FooterComponent,
	],
	exports: [
		CodeComponent,
		ProgressTimerModule,
		ButtonModule,
		TabsModule,
		ExpansionTabsModule,
		CheckboxModule,
		HeaderComponent,
		FlexLayoutModule,
		SidebarComponent,
		FooterComponent,
		KosmoCoreModule,
		SmartContentEditableModule,
		RouterModule,
	],
})
export class SharedModule {}
