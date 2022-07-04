import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
export const ToastConfig = [
  BrowserAnimationsModule,
  ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-bottom-right',
    progressBar: false,
    /*    progressAnimation: 'increasing', */
    closeButton: true,
  }),
  ToastContainerModule,
];
