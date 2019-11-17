import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b2slite',
  templateUrl: './b2slite.component.html',
  styleUrls: ['./b2slite.component.css']
})
export class B2sliteComponent implements OnInit {
  downloadOption = 'windows';
  features = ['Ability to hide plugins',
  'Custom/extra menu entry swapper options',
  'Impling tracker overlay',
  'Ground item timers',
  'Ban list plugin',
  'Friends/Enemies counter',
  'Screenshot friends/clan members on death',
  'Alchemical Hydra helper',
  'Chamber of Xerics and Theater of Blood timers and overlays',
  'Inferno plugin',
  'Grotesque Guardians helper',
  'Time tracker overlay for herbs/birdhouses',
  'Blast mining accumulated EXP counter',
  'Anti-drag (no need to hold down shift)',
  'Discord presence custom status',
  'Window snapping with custom window chrome',
  'Additional chat notifications for PM\'s',
  'Custom reminders'];

  constructor() { }

  ngOnInit() {
  }

  download() {
    if (this.downloadOption === 'windows') {
      window.open('http://jkybtw.github.io/b2slite/b2sLauncher.exe', '_self');
    } else {
      window.open('http://jkybtw.github.io/b2slite/b2sLauncher.jar', '_self');
    }
  }

}
