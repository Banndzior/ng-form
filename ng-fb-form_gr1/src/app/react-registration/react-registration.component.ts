import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-react-registration',
  templateUrl: './react-registration.component.html',
  styleUrls: ['./react-registration.component.css']
})
export class ReactRegistrationComponent implements OnInit {
  myFormGroup: FormGroup;
  // myFormGroup = new FormGroup({
  //   firstName: new FormControl('Kamil', Validators.required),
  //   lastName: new FormControl('Mijacz', Validators.required),
  //   email: new FormControl('email@email', 
  //     [ Validators.required, Validators.email ]),
  //   phoneNumber: new FormControl('123',
  //     [ Validators.required, Validators.pattern(/^[0-9]*$/) ]),
  //   sex: new FormControl('0', Validators.required),
  // });

  constructor(private fb: FormBuilder) {
    this.myFormGroup = fb.group({
      firstName: ['Kamil', Validators.required],
      lastName: ['Mijacz', Validators.required],
      email: [ 'email@email', 
        [ Validators.required, Validators.email ]],
      phoneNumber: ['123',
        [ Validators.required, Validators.pattern(/^[0-9]*$/) ]],
      sex: ['0', Validators.required]
    });
  }

  ngOnInit() {
    this.myFormGroup.valueChanges
      .subscribe((value) => console.log(value));
  }

  register() {
    this.myFormGroup.get('firstName').setValue('Seba');

    this.myFormGroup.patchValue({
      email: 'kamil.mijacz@gmail.com',
      phoneNumber: '0700'
    });

    if(this.myFormGroup.valid) {
      console.log(this.myFormGroup.value);
    }
  }
}
