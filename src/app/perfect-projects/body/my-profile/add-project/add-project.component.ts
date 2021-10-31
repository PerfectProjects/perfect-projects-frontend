import { Component, OnInit } from '@angular/core';
import {UserProfileRestService} from "../../../../rest/user-profile-rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  inputProjectTitle: any;
  inputDescription: any;

  constructor(private userProfileRest: UserProfileRestService,
              private router: Router) { }

  public onSubmit() {
    this.userProfileRest.addProject({description: this.inputDescription, title: this.inputProjectTitle})
      .subscribe((response) => {
        if (response.success) {
          this.router.navigate(["/my-profile"]);
        }
      });
    return;
  }
}
