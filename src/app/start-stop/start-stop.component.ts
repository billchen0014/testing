import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-stop',
  templateUrl: './start-stop.component.html',
  styleUrls: ['./start-stop.component.css']
})
export class StartStopComponent implements OnInit {
  private started = false;

  startPressed(): void {
    console.log('started');
    this.started = true;
  }

  stopPressed(): void {
    console.log('stopped');
    this.started = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
