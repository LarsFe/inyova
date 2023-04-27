import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyComponent } from './strategy.component';

describe('StrategyComponent', () => {
  let component: StrategyComponent;
  let fixture: ComponentFixture<StrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StrategyComponent,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Strategy'`, () => {
    const fixture = TestBed.createComponent(StrategyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Strategy');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StrategyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Strategy Page');
  });
});
