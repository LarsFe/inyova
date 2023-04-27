import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  onSubmit() {
    this.submitted = true;

    if (this.personalDetailsForm.invalid) {
      this.errorMessage = "Some fields are missing";

      return;
    }

    console.log(this.personalDetailsForm.value);
  }

  isFormInvalid = () => {
    return this.submitted && this.personalDetailsForm.invalid;
  }
}
