import {Component, OnInit} from '@angular/core';
import {SignUpService} from "../../../services/sign-up.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  inputEmail: any;
  inputUsername: any;
  inputPassword: any;
  inputRepeatPassword: any;

  constructor(private signUpService: SignUpService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signUpService.createAccount({
      email: this.inputEmail,
      password: this.inputPassword,
      username: this.inputUsername
    });
  }
}
