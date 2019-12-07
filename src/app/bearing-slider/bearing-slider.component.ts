import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';

import { DummyTargetBearingService } from '../dummy-target-bearing.service';

@Component({
  selector: 'app-bearing-slider',
  templateUrl: './bearing-slider.component.html',
  styleUrls: ['./bearing-slider.component.css']
})


export class BearingSliderComponent implements OnInit {

  currentBearing: number = 0;

  constructor(private dummyTargetBearingService: DummyTargetBearingService) {
   }

  updateSlider(bearingSliderValue: number): void {
    this.currentBearing = bearingSliderValue;
    this.dummyTargetBearingService.setBearing(this.currentBearing);
  }


  ngOnInit() {
    console.log('bearing slider init')
  }

}
