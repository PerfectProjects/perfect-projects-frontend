import {Component, OnInit} from '@angular/core';
import {RefreshTokenRestService} from "./rest/refresh-token-rest.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'perfect-projects-frontend';

  constructor(private refreshTokenRest: RefreshTokenRestService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.refreshTokenRest.refresh(this.auth.getUsername()).subscribe((response) => {
      this.auth.setAuthorization(response.payload.accessToken);
    });
  }
}
