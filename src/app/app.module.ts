import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { InterceptorsProviders } from './shared/services/module/module-interceptors.module';
import { ToastConfig } from './shared/Toasts/ToastsConfig';
import { NotFund404Component } from './shared/components/not-fund404/not-fund404.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, NotFund404Component],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastConfig,
  ],
  providers: [
    InterceptorsProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
