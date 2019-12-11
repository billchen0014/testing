import { Component, OnInit } from '@angular/core';
import { DummyTargetBearingService } from '../dummy-target-bearing.service';

@Component({
  selector: 'app-start-stop',
  templateUrl: './start-stop.component.html',
  styleUrls: ['./start-stop.component.css']
})
export class StartStopComponent implements OnInit {
  private started: string = "Stopped";

  startPressed(): void {
    this.started = "Started";
    this.DummyTargetBearingService.startTracker();
  }

  stopPressed(): void {
    this.started = "Stopped";
    this.DummyTargetBearingService.stopTracker();
  }


  constructor(private DummyTargetBearingService: DummyTargetBearingService) { }

  ngOnInit() {
  }

}
