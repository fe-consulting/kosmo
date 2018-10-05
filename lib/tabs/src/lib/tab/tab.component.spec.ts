import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDirective } from './tab.directive';

describe('TabDirective', () => {
  let component: TabDirective;
  let fixture: ComponentFixture<TabDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
