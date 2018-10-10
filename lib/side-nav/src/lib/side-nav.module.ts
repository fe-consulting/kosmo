import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { CommonModule } from '@angular/common';
import { SideNavItemComponent } from './side-nav-item/side-nav-item.component';
import { SideNavSectionComponent } from './side-nav-section/side-nav-section.component';
import { KosmoCoreModule } from '@kosmo/core';

@NgModule({
	imports: [CommonModule, KosmoCoreModule],
	declarations: [
		SideNavComponent,
		SideNavItemComponent,
		SideNavSectionComponent,
	],
	exports: [SideNavComponent, SideNavItemComponent, SideNavSectionComponent],
})
export class SideNavModule {}
