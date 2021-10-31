import { Component, OnInit } from '@angular/core';
import {UserProfileRestService} from "../../../../rest/user-profile-rest.service";
import {ProjectData} from "../../../../models/project-data";

@Component({
  selector: 'app-my-project-list',
  templateUrl: './my-project-list.component.html',
  styleUrls: ['./my-project-list.component.css']
})
export class MyProjectListComponent implements OnInit {

  public projects?: ProjectData[];

  constructor(private userProfileRest: UserProfileRestService) { }

  ngOnInit(): void {
    this.userProfileRest.getProjects().subscribe((response)=>{
      this.projects = response.projects;
    });
  }
}
