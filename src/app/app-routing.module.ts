import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyComponent } from './pages/strategy/strategy.component';
import { NextStepsComponent } from './pages/next-steps/next-steps.component';

const routes: Routes = [
  { path: '', component: StrategyComponent },
  { path: 'next-steps', component: NextStepsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
