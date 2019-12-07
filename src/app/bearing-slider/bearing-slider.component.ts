import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DummyTargetBearingService } from '../dummy-target-bearing.service';

@Component({
  selector: 'app-bearing-slider',
  templateUrl: './bearing-slider.component.html',
  styleUrls: ['./bearing-slider.component.css']
})
export class BearingSliderComponent implements OnInit {
  @ViewChild('bearingSlider', {static: false})
  bearingSlider: ElementRef<HTMLInputElement>;

  currentBearing: number = 0;

  constructor(private dummyTargetBearingService: DummyTargetBearingService) { }

  updateSlider(bearingSliderValue: number): void {
    this.currentBearing = bearingSliderValue;
    this.dummyTargetBearingService.setBearing(this.currentBearing);
    console.log(this.currentBearing);
  }

  ngOnInit() {
    console.log('bearing slider init')
  }

}
