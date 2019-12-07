import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearingSliderComponent } from './bearing-slider.component';

describe('BearingSliderComponent', () => {
  let component: BearingSliderComponent;
  let fixture: ComponentFixture<BearingSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearingSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
