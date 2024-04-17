import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient()
    , { provide: LOCALE_ID, useValue: 'pt' }, { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
};

