import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowIconComponent } from './arrow-icon.component';

describe('ArrowIconComponent', () => {
  let component: ArrowIconComponent;
  let fixture: ComponentFixture<ArrowIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
