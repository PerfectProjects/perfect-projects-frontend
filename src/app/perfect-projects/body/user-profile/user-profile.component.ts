import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserProfileRestService} from "../../../rest/user-profile-rest.service";
import {UserProfileData} from "../../../models/user-profile-data";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userProfileData?: UserProfileData;

  constructor(private route: ActivatedRoute,
              private userProfile: UserProfileRestService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let userId = paramMap.get("userId");
      if (userId!==null)
        this.userProfile.getUser().subscribe(
          (response) => {
            this.userProfileData = response;
          },
          (error) => {
            console.log(error);
           return catchError(error);
          });
    });
  }
}
