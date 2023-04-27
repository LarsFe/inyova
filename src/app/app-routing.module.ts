import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyComponent } from './pages/strategy/strategy.component';
import { NextStepsComponent } from './pages/next-steps/next-steps.component';
import { HomeComponent } from './pages/home/home.component';
import { BookConsultationComponent } from './pages/book-consultation/book-consultation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'next-steps', component: NextStepsComponent },
  { path: 'book-consultation', component: BookConsultationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
