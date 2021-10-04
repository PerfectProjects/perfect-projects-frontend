import {Component, OnInit} from '@angular/core';
import {VerifyAccountService} from "../../../rest/verify-account.service";

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {

  inputVerifyCode: any;

  constructor(private verifyAccount: VerifyAccountService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.verifyAccount.sendCode(this.inputVerifyCode)
      .subscribe((response) => {
        if (response.success) {
          this.inputVerifyCode = "";
        }
      });
  }
}
