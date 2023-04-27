import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { StrategyComponent } from './pages/strategy/strategy.component';
import { NextStepsComponent } from './pages/next-steps/next-steps.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HomeComponent } from './pages/home/home.component';
import { BookConsultationComponent } from './pages/book-consultation/book-consultation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { personalDetailsReducer } from '../app/store/personal-details.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    DropdownComponent,
    FooterComponent,
    DisclaimerComponent,
    StrategyComponent,
    NextStepsComponent,
    NotificationComponent,
    HomeComponent,
    BookConsultationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ personalDetails: personalDetailsReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
