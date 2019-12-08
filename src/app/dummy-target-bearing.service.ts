import { Injectable } from '@angular/core';
import {Observable, of, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyTargetBearingService {

  private targetBearing: number = 0;
  private antennaBearing: number = 0;
  private subject$ = new Subject<any>();

  updateBearingSubscription = function (observer: Observer<any>, newBearing): void {
    observer.next(newBearing); //testing
  }


  constructor() {

  }

  getBearingStream(): Observable<any>{
    return this.subject$.asObservable();
  }


  setTargetBearing(bearingInput: number): void {
    this.targetBearing = bearingInput;
    this.subject$.next([this.targetBearing,this.antennaBearing]);
  }

  setAntennaBearing(bearingInput: number): void {
    this.antennaBearing = bearingInput;
    this.subject$.next([this.targetBearing,this.antennaBearing]);
  }


}
