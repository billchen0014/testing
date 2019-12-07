import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';

import { DummyTargetBearingService } from '../dummy-target-bearing.service';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bearing-slider',
  templateUrl: './bearing-slider.component.html',
  styleUrls: ['./bearing-slider.component.css']
})


export class BearingSliderComponent implements OnInit {
  @ViewChild('bearingSlider', {static: false})
  bearingSlider: ElementRef<HTMLInputElement>;

  @Output() bearingChanged: EventEmitter<number> = new EventEmitter();

  currentBearing: number = 0;
  public currentBearingObservable: Observable<number>;

  constructor(private dummyTargetBearingService: DummyTargetBearingService) {
   }

  updateSlider(bearingSliderValue: number): void {
    this.currentBearing = bearingSliderValue;
    this.dummyTargetBearingService.setBearing(this.currentBearing);

    this.bearingChanged.emit(this.currentBearing);
  }

  ngOnInit() {
    console.log('bearing slider init')
  }

}
