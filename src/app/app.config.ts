import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { routes } from './app.routes';

import { IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

registerLocaleData(localePt, 'pt');

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(), provideEnvironmentNgxMask(maskConfig)
    , { provide: LOCALE_ID, useValue: 'pt' }, { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
};

