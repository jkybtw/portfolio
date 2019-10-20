import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numPeople = 3;
  numOvls = 1;
  numPrays = 1;
  numRestores = 3;
  numBrews = 10;
  constructor() { }

  ngOnInit() {
  }

}
