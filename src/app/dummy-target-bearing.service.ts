import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyTargetBearingService {

  private bearing: number = 0;
  private bearingObservable: Observable<number>;

  constructor() { }

  setBearing(bearingInput: number): void {
    this.bearing = bearingInput;
    this.bearingObservable = of(bearingInput);
  }

  getBearing(){
    return this.bearing;
  }

  getBearingSubscribe(): Observable<number> {
    return of(this.bearing);
  }

}
