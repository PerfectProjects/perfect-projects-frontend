import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ToastState} from "../enums/toast-state";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {
  }

  public showMessage = ((message: string, type: ToastState) => {
    let toast = this.toastr.show().toastRef;
    toast.componentInstance.message = message;
    toast.componentInstance.type = type;

    setTimeout(()=>{
      toast.close();
    },3000);
  });
}
