import {Component, OnInit} from '@angular/core';
import {UserProfileRestService} from "../../../rest/user-profile-rest.service";
import {UserProfileData} from "../../../models/user-profile-data";
import {catchError} from "rxjs/operators";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public userProfileData?: UserProfileData;
  public username: string = "";

  constructor(private userProfile: UserProfileRestService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.username = this.auth.getUsername();
    this.userProfile.getUser().subscribe(
      (response) => {
        this.userProfileData = response;
      },
      (error) => {
        console.log(error);
        return catchError(error);
      });
  }
}
