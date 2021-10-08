import {Component, OnInit} from '@angular/core';
import {SignInService} from "../../../rest/sign-in.service";
import {AuthService} from "../../../services/auth.service";
import {RefreshTokenService} from "../../../rest/refresh-token.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  inputUsername: any;
  inputPassword: any;

  constructor(private signInService: SignInService,
              private auth: AuthService,
              private asd: RefreshTokenService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signInService.signIn({
      username: this.inputUsername,
      password: this.inputPassword
    }).subscribe(
      (response) => {
        this.auth.setRefreshToken(response.refreshToken);
        this.auth.setAuthorization(response.accessToken);

        //TODO delete after tests
        this.asd.refresh().subscribe((response) => {
          console.log(response.accessToken);
        });
      }
    );
  }
}
