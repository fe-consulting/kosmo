import { QueryList } from '@angular/core';
import { Tab } from './tab/tab';

export abstract class Tabs<T extends Tab> {
	public tabs: QueryList<T>;

	public tabClicked(tab: T) {
		this.tabs.forEach(_ => {
			const value = _ === tab;
			const changed = value !== _.isActive;

			return changed ? (_.active = value) : undefined;
		});
	}

	public toggleAll() {
		this.tabs.forEach(_ => (_.active = false));
	}
}
