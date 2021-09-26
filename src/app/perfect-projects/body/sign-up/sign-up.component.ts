import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  inputEmail: any;
  inputNickname: any;
  inputPassword: any;
  inputRepeatPassword: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(signUpForm: NgForm) {
    console.log("onSubmit works!");
    console.log(signUpForm);
  }
}
