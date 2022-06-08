import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorHttpHeadersService } from '../interceptors/interceptor-http-headers.service';
import { InterceptorsErrorsService } from '../interceptors/interceptors-errors.service';

export const InterceptorsProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorHttpHeadersService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorsErrorsService,
    multi: true,
  },
];
