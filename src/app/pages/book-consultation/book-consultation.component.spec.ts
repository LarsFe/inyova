import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsultationComponent } from './book-consultation.component';

describe('BookConsultationComponent', () => {
  let component: BookConsultationComponent;
  let fixture: ComponentFixture<BookConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookConsultationComponent,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Book Consultation'`, () => {
    const fixture = TestBed.createComponent(BookConsultationComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Book Consultation');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BookConsultationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Book Consultation Page');
  });
});
