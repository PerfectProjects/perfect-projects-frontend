import { Component, OnInit } from '@angular/core';
import {UserProfileData} from "../../../../models/user-profile-data";
import {catchError} from "rxjs/operators";
import {UserProfileRestService} from "../../../../rest/user-profile-rest.service";

@Component({
  selector: 'app-my-project-list',
  templateUrl: './my-project-list.component.html',
  styleUrls: ['./my-project-list.component.css']
})
export class MyProjectListComponent implements OnInit {

  constructor(private userProfile: UserProfileRestService) { }

  ngOnInit(): void {
  }
}
