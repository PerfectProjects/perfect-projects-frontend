import {Component, OnInit} from '@angular/core';
import {VerifyAccountService} from "../../../rest/verify-account.service";
import {ToastService} from "../../../services/toast.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {

  inputConfirmationCode: any;

  constructor(private verifyAccount: VerifyAccountService,
              private toast: ToastService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.toast.showMessage("siemano", "SUCCESS");
    // this.verifyAccount.sendCode(this.inputConfirmationCode, this.auth.getUsername())
    //   .subscribe((response) => {
    //     if (response.success) {
    //       this.toastr.show("Account verified!");
    //     }
    //   });
  }
}
