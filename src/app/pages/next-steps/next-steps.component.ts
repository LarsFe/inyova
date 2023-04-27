import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setPersonalDetails } from '../../store/personal-details.actions';

@Component({
  selector: 'app-next-steps',
  templateUrl: './next-steps.component.html',
  styleUrls: ['./next-steps.component.scss']
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

  constructor(private store: Store) {}

  onSubmit() {
    this.submitted = true;

    if (this.personalDetailsForm.invalid) {
      this.errorMessage = "Some fields are missing";

      return;
    }

    this.store.dispatch(
      setPersonalDetails({
        gender: `${this.personalDetailsForm.value.gender}`,
        firstname: `${this.personalDetailsForm.value.firstname}`,
        lastname: `${this.personalDetailsForm.value.lastname}`,
        day: `${this.personalDetailsForm.controls.dob.value.day}`,
        month: `${this.personalDetailsForm.controls.dob.value.month}`,
        year: `${this.personalDetailsForm.controls.dob.value.year}`,
        nationality: `${this.personalDetailsForm.value.nationality}`,
      })
    );
  }

  isFormInvalid = () => {
    return this.submitted && this.personalDetailsForm.invalid;
  }
}
