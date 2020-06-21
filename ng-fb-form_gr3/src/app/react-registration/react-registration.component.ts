import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-react-registration',
  templateUrl: './react-registration.component.html',
  styleUrls: ['./react-registration.component.css']
})
export class ReactRegistrationComponent implements OnInit {
  myFormGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.myFormGroup = fb.group({
      firstName: ['Kamil', [Validators.required, Validators.maxLength(10)]],
      lastName: ['Mijacz', [Validators.required, Validators.minLength(3)]],
      /// ...
    });

    this.myFormGroup = new FormGroup({
      firstName: new FormControl('Kamil',
        [Validators.required, Validators.maxLength(10)]),
      lastName: new FormControl('Mijacz',
        [Validators.required, Validators.minLength(3)]),
      email: new FormControl('',
        [Validators.required, Validators.email]),
      phoneNumber: new FormControl('',
        [Validators.required, Validators.pattern(/^[0-9\s]*$/)]),
      gender: new FormControl('0', Validators.required),
    });
  }

  ngOnInit() {
    this.myFormGroup.valueChanges.subscribe((value) => console.table(value));
  }

  register() {
    if (this.myFormGroup.valid) {
      console.log(this.myFormGroup);
    } else {
      this.myFormGroup.markAllAsTouched();
    }
  }

  hasError(controlName: string) {
    return this.myFormGroup.get(controlName).errors
      && this.myFormGroup.get(controlName).touched;
  }
}
