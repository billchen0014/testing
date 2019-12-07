import { Injectable } from '@angular/core';
import {Observable, of, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyTargetBearingService {

  private bearing: number = 0;
  private subject = new Subject<any>();

  updateBearingSubscription = function (observer: Observer<any>, newBearing): void {
    observer.next(newBearing); //testing
  }


  private bearingObservable = new Observable((observer) => this.updateBearingSubscription(observer,2));

  constructor() {

   }


  setBearing(bearingInput: number): void {
    this.bearing = bearingInput;
  }

  getBearing(){
    return this.bearing;
  }


}
