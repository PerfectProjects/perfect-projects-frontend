import {Component, OnInit} from '@angular/core';
import {SignInService} from "../../../rest/sign-in.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  inputUsername: any;
  inputPassword: any;

  constructor(private signInService: SignInService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signInService.signIn({
      username: this.inputUsername,
      password: this.inputPassword
    });
  }
}
