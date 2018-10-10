import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSectionComponent } from './side-nav-section.component';

describe('SideNavSectionComponent', () => {
  let component: SideNavSectionComponent;
  let fixture: ComponentFixture<SideNavSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
