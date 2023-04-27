import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NextStepsComponent } from './next-steps.component';
import { DisclaimerComponent } from 'src/app/components/disclaimer/disclaimer.component';

describe('NextStepsComponent', () => {
  let component: NextStepsComponent;
  let fixture: ComponentFixture<NextStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ NextStepsComponent, DisclaimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
