import {Component, OnInit} from '@angular/core';
import {SignUpRestService} from "../../../rest/sign-up-rest.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

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

  constructor(private signUpService: SignUpRestService,
              private router: Router,
              private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signUpService.createAccount({
      email: this.inputEmail,
      password: this.inputPassword,
      username: this.inputUsername
    }).subscribe(
      (response) => {
        if (response.success)
          this.auth.setUsername(this.inputUsername);
          this.router.navigate(["/verify-account"]);
      });
  }

  passwordMatch() {
    return this.inputRepeatPassword === this.inputPassword;
  }
}
