import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorsProviders } from './shared/services/module/module-interceptors.module';
import { ToastConfig } from './shared/Toasts/ToastsConfig';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastConfig,
  ],
  providers: [
    InterceptorsProviders,
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
