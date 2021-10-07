import { Component, OnInit } from '@angular/core';

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

}
