import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
export const ToastConfig = [
  BrowserAnimationsModule,
  ToastrModule.forRoot({
    timeOut: 7000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    progressBar: true,
    progressAnimation: 'increasing',
    closeButton: true,
  }),
  ToastContainerModule,
];
