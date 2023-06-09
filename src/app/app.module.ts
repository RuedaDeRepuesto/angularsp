import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzProgressModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
