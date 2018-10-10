import {
	ChangeDetectionStrategy,
	Component,
	ContentChildren,
	QueryList,
	ViewEncapsulation,
	AfterContentInit,
} from '@angular/core';

import { TabDirective } from '../tab/tab.directive';
import { Tabs } from '@kosmo/core';
import { first } from 'rxjs/operators';

@Component({
	selector: 'k-tabs, [k-tabs]',
	templateUrl: './tabs.component.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent extends Tabs<TabDirective>
	implements AfterContentInit {
	@ContentChildren(TabDirective)
	public tabs: QueryList<TabDirective> = new QueryList();

	public ngAfterContentInit() {
		this.tabs.changes.pipe(first()).subscribe(() => {
			this.setActiveTab();
		});

		this.tabs.notifyOnChanges();
	}

	private setActiveTab() {
		const activeTab = this.tabs.find(_ => _.isActive);
		if (!activeTab) {
			this.tabs.first.active = true;
		}
	}
}
