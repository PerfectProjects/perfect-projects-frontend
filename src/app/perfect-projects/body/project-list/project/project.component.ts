import {Component, Input, OnInit} from '@angular/core';
import {BasicProjectData} from "../../../../models/basic-project-data";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
