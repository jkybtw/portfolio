import { Component } from '@angular/core';
import { fadeInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInAnimation
  ]
})
export class AppComponent {
  title = 'portfolio';
}
