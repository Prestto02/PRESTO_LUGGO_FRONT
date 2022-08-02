import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
export const ToastConfig = [
  BrowserAnimationsModule,
  ToastrModule.forRoot({
    timeOut: 3000,
    preventDuplicates: true,
    positionClass: 'toast-bottom-center',
    progressBar: false,
    /*    progressAnimation: 'increasing', */
    closeButton: false,
  }),
  ToastContainerModule,
];
