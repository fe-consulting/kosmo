import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    QueryList,
    ViewEncapsulation
} from '@angular/core';

import { Tabs } from "@kosmo/core";
import { ExpansionTabDirective } from "./expansion-tab/expansion-tab-directive.component";

@Component({
    selector: 'k-expansion-tabs',
    templateUrl: './expansion-tabs.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionTabsComponent extends Tabs<ExpansionTabDirective> {
    @ContentChildren(ExpansionTabDirective)
    public tabs: QueryList<ExpansionTabDirective> = new QueryList();

    public ngAfterContentInit() {}

    public click(tab: ExpansionTabDirective) {
        if (tab.active) {
            return this.toggleAll();
        }

        this.tabClicked(tab);
    }
}
