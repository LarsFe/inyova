import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setPersonalDetails } from '../../store/personal-details.actions';
import { PersonalDetailsState } from '../../store/personal-details.reducer';

@Component({
  selector: 'app-next-steps',
  templateUrl: './next-steps.component.html',
  styleUrls: ['./next-steps.component.scss'],
})
export class NextStepsComponent {
  title: string = 'Next Steps';
  submitted: boolean = false;
  errorMessage: string = '';

  personalDetailsForm = new FormGroup({
    gender: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    dob: new FormGroup({
      day: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
    }),
    nationality: new FormControl('', Validators.required),
  });

  personalDetails$!: Observable<PersonalDetailsState>;

  constructor(private store: Store<{ personalDetails: PersonalDetailsState }>) {}

  ngOnInit(): void {
    this.personalDetails$ = this.store.select('personalDetails');

    this.personalDetails$.subscribe((personalDetails) => {
      this.personalDetailsForm.setValue({
        gender: personalDetails.gender,
        firstname: personalDetails.firstname,
        lastname: personalDetails.lastname,
        dob: {
          day: personalDetails.day,
          month: personalDetails.month,
          year: personalDetails.year,
        },
        nationality: personalDetails.nationality,
      });
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.personalDetailsForm.invalid) {
      this.errorMessage = "Some fields are missing";

      return;
    }

    const personalDetails = this.personalDetailsForm.value;

    this.store.dispatch(
      setPersonalDetails({
        gender: `${personalDetails.gender}`,
        firstname: `${personalDetails.firstname}`,
        lastname: `${personalDetails.lastname}`,
        day: `${personalDetails.dob?.day}`,
        month: `${personalDetails.dob?.month}`,
        year: `${personalDetails.dob?.year}`,
        nationality: `${personalDetails.nationality}`,
      })
    );

    this.submitted = false;
  }

  isFormInvalid = () => {
    return this.submitted && this.personalDetailsForm.invalid;
  }
}
