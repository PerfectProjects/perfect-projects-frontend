import {Component} from '@angular/core';
import {UserProfileRestService} from "../../../../rest/user-profile-rest.service";
import {Router} from "@angular/router";
import {EditorChangeContent, EditorChangeSelection} from "ngx-quill";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  inputProjectTitle: any;
  inputDescription: any;
  content: any;

  constructor(private userProfileRest: UserProfileRestService,
              private router: Router) {
  }

  public onSubmit() {
    this.userProfileRest.addProject({id: "", description: this.inputDescription, title: this.inputProjectTitle})
      .subscribe((response) => {
        if (response.success) {
          this.router.navigate(["/my-profile"]);
        }
      });
    return;
  }

  public onEditorChange(event: EditorChangeContent | EditorChangeSelection) {
    if (event.event === "text-change") {
      this.content = event.editor.root.innerHTML;
    }
  }
}
