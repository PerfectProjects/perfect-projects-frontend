import {Component} from '@angular/core';
import {UserProfileRestService} from "../../../../rest/user-profile-rest.service";
import {Router} from "@angular/router";
import {EditorChangeContent, EditorChangeSelection} from "ngx-quill";
import Quill from 'quill';
import BlotFormatter, {DeleteAction, ImageSpec, ResizeAction} from 'quill-blot-formatter';
import {ToastService} from "../../../../services/toast.service";
import {ToastState} from "../../../../models/toast-state";

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
  inputProjectTitle: string = "";
  inputProjectDescription: string = "";
  modules = {}

  constructor(private userProfileRest: UserProfileRestService,
              private router: Router,
              private toast: ToastService) {
    this.modules = {
      blotFormatter: {
        specs: [CustomImageSpec]
      }
    };
  }

  public onSubmit() {
    this.userProfileRest.addProject({id: "", description: this.inputProjectDescription, title: this.inputProjectTitle})
      .subscribe((response) => {
        if (response.success) {
          this.toast.showMessage(`${this.inputProjectTitle} has been added`, ToastState.SUCCESS);
          this.router.navigate(["/my-profile"]).then(x => {
          });
        }
      });
    return;
  }

  public onEditorChange(event: EditorChangeContent | EditorChangeSelection) {
    if (event.event === "text-change") {
      this.inputProjectDescription = btoa(event.editor.root.innerHTML);
      console.log(this.inputProjectDescription);
    }
  }
}
