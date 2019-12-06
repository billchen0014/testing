/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit{
@ViewChild('gmap',{static: false}) 
gmapElement: any;

  map: google.maps.Map;
  constructor() { }

  ngAfterViewInit() {
    var mapProp = {
      center: new  google.maps.LatLng(-37.956864, 145.237495),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
