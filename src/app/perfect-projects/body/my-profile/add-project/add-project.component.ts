import {Component} from '@angular/core';
import {UserProfileApiCallerService} from "../../../../api-caller/user-profile-api-caller.service";
import {Router} from "@angular/router";
import Quill from 'quill';
import BlotFormatter, {DeleteAction, ImageSpec, ResizeAction} from 'quill-blot-formatter';
import {ToastService} from "../../../../services/toast.service";
import {ToastState} from "../../../../enums/toast-state";
import {AuthService} from "../../../../services/auth.service";
import {ProjectApiCallerService} from "../../../../api-caller/project-api-caller.service";

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
  modules = {}

  constructor(private projectApiCaller: ProjectApiCallerService,
              private router: Router,
              private toast: ToastService,
              private auth: AuthService) {
    this.modules = {
      blotFormatter: {
        specs: [CustomImageSpec]
      }
    };
  }

  public onSubmit(quillEditor: Quill) {
    console.log(quillEditor.root.innerHTML);
    const projectData = {
      id: "",
      title: this.inputProjectTitle,
      author: this.auth.getUsername(),
      description: btoa(quillEditor.root.innerHTML)
    };
    this.projectApiCaller.addProject(projectData)
      .subscribe((response) => {
        if (response.success) {
          this.toast.showMessage(`${this.inputProjectTitle} has been added!`, ToastState.SUCCESS);
          this.router.navigate(["/my-profile"]).then(x => {
          });
        }
      });
    return;
  }
}
