import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyTargetBearingService {

  private bearing: number = 0;

  constructor() { }

  setBearing(bearingInput: number): void {
    this.bearing = bearingInput;
  }

  getBearing(){
    return this.bearing;
  }

}
