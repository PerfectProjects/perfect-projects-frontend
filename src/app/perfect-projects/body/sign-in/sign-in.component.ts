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

  constructor(private signIn: SignInService,
              private auth: AuthService,
              private refreshToken: RefreshTokenService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signIn.signIn({
      username: this.inputUsername,
      password: this.inputPassword
    }).subscribe(
      (response) => {
        this.auth.setRefreshToken(response.payload.refreshToken);
        this.auth.setAuthorization(response.payload.accessToken);
        // this.refreshToken.refresh(this.auth.getRefreshToken(), this.auth.getUsername())
        //   .subscribe((response) => {
        //     this.auth.setAuthorization(response.accessToken);
        //   });
      }
    );
  }
}
