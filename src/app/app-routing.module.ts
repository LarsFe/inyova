import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyComponent } from './pages/strategy/strategy.component';
import { NextStepsComponent } from './pages/next-steps/next-steps.component';
import { HomeComponent } from './pages/home/home.component';
import { BookConsultationComponent } from './pages/book-consultation/book-consultation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'next-steps', component: NextStepsComponent },
  { path: 'book-consultation', component: BookConsultationComponent },
  // Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
