import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionTabDirective } from './expansion-tab-directive.component';

describe('ExpansionTabDirective', () => {
	let component: ExpansionTabDirective;
	let fixture: ComponentFixture<ExpansionTabDirective>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ExpansionTabDirective],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExpansionTabDirective);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
