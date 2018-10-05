import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    QueryList,
    ViewEncapsulation
} from '@angular/core';

import { TabDirective } from '../tab/tab.directive';
import { Tabs } from '@kosmo/core';

@Component({
    selector: 'k-tabs',
    templateUrl: './tabs.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent extends Tabs<TabDirective> {
    @ContentChildren(TabDirective)
    public tabs: QueryList<TabDirective> = new QueryList();
}
