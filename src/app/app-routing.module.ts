import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PotionsComponent } from './components/guides/potions/potions.component';
import { CalculatorComponent } from './components/guides/calculator/calculator.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'guides/calculator', component: CalculatorComponent },
  { path: 'guides/potions', component: PotionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
