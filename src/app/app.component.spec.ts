import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; 
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { NextStepsComponent } from './pages/next-steps/next-steps.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HomeComponent } from './pages/home/home.component';
import { BookConsultationComponent } from './pages/book-consultation/book-consultation.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      /*
        add components to avoid Error NG0304: 'app-xxx' is not a known element
        (used in the 'HeaderComponent' component template)
      */
      declarations: [
        AppComponent,
        DropdownComponent,
        HeaderComponent,
        NavigationComponent,
        FooterComponent,
        DisclaimerComponent,
        NextStepsComponent,
        NotificationComponent,
        HomeComponent,
        BookConsultationComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
