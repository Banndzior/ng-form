import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user: any = { };

  constructor() { }

  ngOnInit() {
  }

  register(myForm: NgForm) {
    console.log(myForm, this.user);
  }

}
