import { Component, OnInit } from '@angular/core';
import { DummyTargetBearingService } from '../dummy-target-bearing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  private deviation: number = 0;
  private bearingSubscription: Subscription;

  constructor(private dummyTargetBearingService: DummyTargetBearingService) {
    this.bearingSubscription = this.dummyTargetBearingService.getBearingStream().subscribe(bearinginput => 
      {
        //check for deviation
        this.deviation = Math.min(Math.abs(bearinginput[0]-bearinginput[1]),Math.abs(bearinginput[0]-bearinginput[1]+360),Math.abs(bearinginput[0]-bearinginput[1]-360)) ;
      }
      )
   }

  ngOnInit() {
  }

}
