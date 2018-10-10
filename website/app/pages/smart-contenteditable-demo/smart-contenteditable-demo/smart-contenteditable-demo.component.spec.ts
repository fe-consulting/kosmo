import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContenteditableDemoComponent } from './smart-contenteditable-demo.component';

describe('SmartContenteditableDemoComponent', () => {
  let component: SmartContenteditableDemoComponent;
  let fixture: ComponentFixture<SmartContenteditableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartContenteditableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartContenteditableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
