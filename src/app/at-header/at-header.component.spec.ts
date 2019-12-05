import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtHeaderComponent } from './at-header.component';

describe('AtHeaderComponent', () => {
  let component: AtHeaderComponent;
  let fixture: ComponentFixture<AtHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
