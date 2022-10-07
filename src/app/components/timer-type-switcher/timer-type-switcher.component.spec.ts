import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTypeSwitcherComponent } from './timer-type-switcher.component';

describe('TimerTypeSwitcherComponent', () => {
  let component: TimerTypeSwitcherComponent;
  let fixture: ComponentFixture<TimerTypeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerTypeSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTypeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
