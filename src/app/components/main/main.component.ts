import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var VANTA;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    VANTA.FOG({
      el: '#welcome-container-id',
      highlightColor: 0xfaffff,
      midtoneColor: 0xdbe1ff,
      lowlightColor: 0xdbe1ff,
      baseColor: 0xedf0ff,
      blurFactor: 0.5,
      speed: 3.5,
      zoom: 3
    });
  }

}
