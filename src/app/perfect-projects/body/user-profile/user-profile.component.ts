import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserProfileService} from "../../../services/user-profile.service";
import {UserProfileData} from "../../../models/user-profile-data";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userProfileData?: UserProfileData;

  constructor(private route: ActivatedRoute,
              private userProfile: UserProfileService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const userId = paramMap.get("userId");
      this.userProfile.getUser(userId)?.subscribe(
        (response) => {
          // TODO Handle response from the server
          console.log("Response!");
          console.log(response);
          this.userProfileData = response;
        });
    });
  }
}
