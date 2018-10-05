import {AfterContentInit, QueryList} from "@angular/core";
import {Tab} from './tab/tab';

export abstract class Tabs<T extends Tab> implements AfterContentInit {
    public tabs: QueryList<T>;

    public ngAfterContentInit() {
        this.tabs.first.active = true;
    }

    public tabClicked(tab: T) {
        this.tabs.forEach(_ => {
            const value = _ === tab;
            const changed = value !== _.active;
            return changed ? _.active = value : undefined;
        });
    }

    public toggleAll() {
        this.tabs.forEach(_ => _.active = false);
    }
}
