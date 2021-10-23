import {Component, OnInit} from '@angular/core';
import {SignInRestService} from "../../../rest/sign-in-rest.service";
import {AuthService} from "../../../services/auth.service";
import {RefreshTokenRestService} from "../../../rest/refresh-token-rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  inputUsername: any;
  inputPassword: any;

  constructor(private signIn: SignInRestService,
              private refresh: RefreshTokenRestService,
              private auth: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signIn.signIn({
      username: this.inputUsername,
      password: this.inputPassword
    }).subscribe(
      (response) => {
        this.auth.setAuthorization(response.payload.accessToken);
        this.router.navigate(["/"]);
      });
  }
}
