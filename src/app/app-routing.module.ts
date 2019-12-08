import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PotionsComponent } from './components/osrs/potions/potions.component';
import { CalculatorComponent } from './components/osrs/calculator/calculator.component';
import { B2sliteComponent } from './components/osrs/b2slite/b2slite.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'osrs/b2sLite', component: B2sliteComponent },
  { path: 'osrs/calculator', component: CalculatorComponent },
  { path: 'osrs/potions', component: PotionsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
