import {Component, OnInit} from '@angular/core';
import {ProjectApiCallerService} from "../../../api-caller/project-api-caller.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  pictures = ["game", "picture", "room"];

  constructor(private projectApiCaller: ProjectApiCallerService) {
  }

  ngOnInit(): void {

    this.projectApiCaller
  }

}
