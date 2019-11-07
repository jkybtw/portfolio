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
  split = false;
  extras = false;
  totalOvls: number;
  totalPrays: number;
  totalRestores: number;
  totalBrews: number;
  totalPots: number;
  totalNox: number;
  totalGolp: number;
  totalBuch: number;
  constructor() { }

  ngOnInit() {
    this.updateAll();
  }

  updateAll() {
    this.updateOvls();
    this.updatePrays();
    this.updateRestores();
    this.updateBrews();
  }

  updateOvls() {
    if (this.split) {
      this.totalOvls = Math.ceil((this.numOvls * this.numPeople) / 2);
    } else {
      this.totalOvls = this.numOvls * this.numPeople;
    }
  }

  updatePrays() {
    this.totalPrays = this.numPrays * this.numPeople;
  }

  updateRestores() {
    if (this.extras) {
      this.totalRestores = (this.numRestores + 1) * this.numPeople;
    } else {
      this.totalRestores = this.numRestores * this.numPeople;
    }
  }

  updateBrews() {
    if (this.extras) {
      this.totalBrews = (this.numBrews + 1) * this.numPeople;
    } else {
      this.totalBrews = this.numBrews * this.numPeople;
    }
  }

}
