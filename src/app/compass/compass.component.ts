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

  //defining the functions used to draw the compass

  drawCompassFace(context:CanvasRenderingContext2D, radius: number, height: number): void {
    //Circle
    context.beginPath();
    context.arc(0, 0, radius, 0, 2*Math.PI);
    //fill
    context.fillStyle = "lightblue";
    context.fill();
    //outline
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke();
  }

  toRadians(degAng: number){
    return degAng/180*Math.PI;
  }

  drawNeedle(context:CanvasRenderingContext2D, degAng:number, startPos, endPos, width, colour){
  
    var rotationRad = this.toRadians(degAng);

    // Save transform
    context.save();

    // Rotate the canvas so we can just draw a vertical line.
    context.rotate(rotationRad);

    // Create a straight vertical line
    context.beginPath();
    context.moveTo(0,-startPos);
    context.lineTo(0, -endPos);


    // Draw line.
    context.strokeStyle = colour;
    context.lineWidth = width;
    context.lineCap = "round";
    context.stroke();
    context.closePath();

    // Restore transform (undo rotation)
    context.restore();
    //console.log(endPos)
  }
  

  updateDisplay(targetBearing): void {
    var compassCanvas = this.canvasCompass.nativeElement;
    var context = this.canvasCompass.nativeElement.getContext("2d");
    var radius = this.canvasCompass.nativeElement.width / 2;
    var height = this.canvasCompass.nativeElement.height / 2;
  
    //clearing the canvas
    context.clearRect(-radius, -radius, compassCanvas.width, compassCanvas.height);

    //smaller radius for drawing
    radius = 0.8*radius;
    height = 0.8*height;

    this.drawCompassFace(context,radius, height);
    this.drawNeedle(context,targetBearing,0,radius,3,"red");

  }


  resizeCanvas(){
    var content = document.getElementById("content");
    var canvas = this.canvasCompass.nativeElement;
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style.width = content.offsetWidth + 'px';
    canvas.style.height = content.offsetWidth + 'px';
    var context = canvas.getContext("2d");
    var radius = canvas.height / 2;
    context.translate(radius, radius);
  }


  
  constructor(private dummyTaretBearingService: DummyTargetBearingService) { }

  ngOnInit() {
    this.resizeCanvas();
    this.dummyTaretBearingService.getBearingSubscribe()
    .subscribe(bearing => this.updateDisplay(bearing))

    var radius = this.canvasCompass.nativeElement.width / 2 * 0.85;
    // this.updateDisplay();
    // console.log(this.dummyTaretBearingService.getBearing());
    // this.drawNeedle(this.canvasCompass.nativeElement.getContext("2d"),0,0,radius,3,"red");
  }

  

}
