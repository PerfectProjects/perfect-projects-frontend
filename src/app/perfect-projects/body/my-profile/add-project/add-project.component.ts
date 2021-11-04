import {Component} from '@angular/core';
import {UserProfileRestService} from "../../../../rest/user-profile-rest.service";
import {Router} from "@angular/router";
import {EditorChangeContent, EditorChangeSelection} from "ngx-quill";
import Quill from 'quill';
import BlotFormatter, {ResizeAction,DeleteAction,AlignAction,ImageSpec} from 'quill-blot-formatter';

Quill.register('modules/blotFormatter', BlotFormatter);

class CustomImageSpec extends ImageSpec {
  getActions() {
    return [DeleteAction, ResizeAction];
  }
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  inputProjectTitle: any;
  inputDescription: any;
  content: any;
  modules = {}

  constructor(private userProfileRest: UserProfileRestService,
              private router: Router) {
    this.modules = {
      blotFormatter: {
        specs: [CustomImageSpec]
      }
    };
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
