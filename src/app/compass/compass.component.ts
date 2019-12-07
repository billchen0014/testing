import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DummyTargetBearingService } from '../dummy-target-bearing.service'

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.css']
})
export class CompassComponent implements OnInit {

  @ViewChild('compassCanvas', {static:true})
  canvasCompass: ElementRef<HTMLCanvasElement>;


  drawCompassFace(context:CanvasRenderingContext2D, radius: number, height: number): void {
    //Circle
    context.beginPath();
    context.arc(radius/0.8, height/0.8, radius, 0, 2*Math.PI);
    //fill
    context.fillStyle = "lightgrey";
    context.fill();
    //outline
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();
  }

  updateDisplay(): void {
    var compassCanvas = this.canvasCompass.nativeElement;
    var context = this.canvasCompass.nativeElement.getContext("2d");
    var radius = this.canvasCompass.nativeElement.width / 2;
    var height = this.canvasCompass.nativeElement.height / 2;
    
    console.log(radius);
    console.log(height);

    //clearing the canvas
    context.clearRect(-radius, -radius, compassCanvas.width, compassCanvas.height);

    //smaller radius for drawing
    radius = 0.8*radius;
    height = 0.8*height;
    console.log(radius);
    console.log(height);

    this.drawCompassFace(context,radius, height);


  }
  constructor(private dummyTaretBearingService: DummyTargetBearingService) { }

  ngOnInit() {
    this.updateDisplay();
    console.log(this.dummyTaretBearingService.getBearing());
  }

  

}
