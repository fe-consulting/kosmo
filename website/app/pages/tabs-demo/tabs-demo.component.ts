import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TabDirective } from '@kosmo/tabs';

@Component({
	selector: 'app-tabs-demo',
	templateUrl: './tabs-demo.component.html',
	styleUrls: ['./tabs-demo.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDemoComponent implements OnInit {
	public ngOnInit() {}

	public selected(tab: TabDirective) {
		console.log('SELECTED', tab);
	}

	public deselected(tab: TabDirective) {
		console.log('DESELECTED', tab);
	}
}
