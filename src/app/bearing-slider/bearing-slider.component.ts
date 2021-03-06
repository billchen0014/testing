import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';

import { DummyTargetBearingService } from '../dummy-target-bearing.service';

@Component({
  selector: 'app-bearing-slider',
  templateUrl: './bearing-slider.component.html',
  styleUrls: ['./bearing-slider.component.css']
})


export class BearingSliderComponent implements OnInit {

  currentTargetBearing: number = 0;
  currentAntennaBearing: number = 0;

  constructor(private dummyTargetBearingService: DummyTargetBearingService) {
  }
  
  updateTargetBearing(bearingSliderValue: number): void {
    this.currentTargetBearing = bearingSliderValue;
    this.dummyTargetBearingService.setTargetBearing(bearingSliderValue);
  }

  updateAntennaBearing(bearingSliderValue: number): void {
    this.currentAntennaBearing = bearingSliderValue;
    this.dummyTargetBearingService.setAntennaBearing(bearingSliderValue);
  }






  ngOnInit() {
    console.log('bearing slider init')
  }

}
