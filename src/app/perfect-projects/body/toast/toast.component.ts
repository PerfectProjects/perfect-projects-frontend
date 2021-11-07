import { Component, OnInit } from '@angular/core';
import {ToastState} from "../../../enums/toast-state";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  message: string = "";
  type: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  isSuccess = () => {
   return this.type === ToastState.SUCCESS;
  }

  isError = () => {
    return this.type === ToastState.ERROR;
  }

  isInfo = () => {
    return this.type === ToastState.INFO;
  }
}
