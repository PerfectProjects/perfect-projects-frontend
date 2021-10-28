import {Component, OnInit} from '@angular/core';
import {VerifyAccountRestService} from "../../../rest/verify-account-rest.service";
import {ToastService} from "../../../services/toast.service";
import {AuthService} from "../../../services/auth.service";
import {ToastState} from "../../../models/toast-state";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {

  inputConfirmationCode: any;
  private username: string = "";

  constructor(private verifyAccount: VerifyAccountRestService,
              private toast: ToastService,
              private auth: AuthService,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const username = paramMap.get("username");
      if (username != null)
        this.username = username;});
  }

  onSubmit() {
    if (this.username !== "")
    this.verifyAccount.sendCode(this.inputConfirmationCode, this.username)
      .subscribe((response) => {
        if (response.success) {
          this.toast.showMessage("Account verified!", ToastState.SUCCESS);
        }
      });
  }
}
