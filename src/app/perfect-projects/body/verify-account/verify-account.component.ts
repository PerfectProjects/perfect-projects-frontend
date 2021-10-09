import {Component, OnInit} from '@angular/core';
import {VerifyAccountRestService} from "../../../rest/verify-account-rest.service";
import {ToastService} from "../../../services/toast.service";
import {AuthService} from "../../../services/auth.service";
import {ToastState} from "../../../models/toast-state";

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {

  inputConfirmationCode: any;

  constructor(private verifyAccount: VerifyAccountRestService,
              private toast: ToastService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.verifyAccount.sendCode(this.inputConfirmationCode, this.auth.getUsername())
      .subscribe((response) => {
        if (response.success) {
          this.toast.showMessage("Account verified!", ToastState.SUCCESS);
        }
      });
  }
}
