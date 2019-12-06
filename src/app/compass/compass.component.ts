import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.css']
})
export class CompassComponent implements OnInit {

  @ViewChild('canvasCompass', {static:true})
  canvasCompass: ElementRef<HTMLCanvasElement>;


  /* 

  */

  updateDisplay(): void {
    var compassCanvas = this.canvasCompass.nativeElement;
    var context = this.canvasCompass.nativeElement.getContext("2d");
    var radius = this.canvasCompass.nativeElement.height / 2;

    //clearing the canvas
    context.clearRect(-radius, -radius, compassCanvas.width, compassCanvas.height);

    //smaller radius for drawing
    radius = 0.8*radius;

    //drawCompassFace(context,radius);


  }

  constructor() { }

  ngOnInit() {

  }

  

}
