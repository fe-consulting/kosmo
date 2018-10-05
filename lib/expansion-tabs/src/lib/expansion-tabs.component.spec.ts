import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionTabsComponent } from './expansion-tabs.component';

describe('ExpansionTabsComponent', () => {
  let component: ExpansionTabsComponent;
  let fixture: ComponentFixture<ExpansionTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
