import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        NavigationComponent,
        DropdownComponent
      ],
      /*
        add RouterModule to avoid Error NG0303: Can't bind to 'routerLink' since it
        isn't a known property of 'a' (used in the 'HeaderComponent' component template)
      */
      imports:[RouterModule.forRoot([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
