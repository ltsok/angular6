import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { constant } from './service/i18n/i18n.constant';
import { HeaderComponent, FooterComponent, SidebarComponent } from './layout';
import { HttpService, LoggerService, CacheService, StorageService, TpiGlobalService, I18nService, I18nPipe } from './service';

// components
const components = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent
];

// services
const services = [
  LoggerService,
  CacheService,
  HttpService,
  StorageService,
  TpiGlobalService,
  I18nService
];

// pipes
const pipes = [
  I18nPipe
];

export const TransModule: ModuleWithProviders = TranslateModule.forChild({
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateHttpLoader),
    deps: [HttpClient]
  }
});

export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, constant.i18nFilePrefix, constant.i18nFileSuffix);
};

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,//jsonp跨域
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    ...components,
    ...pipes
  ],
  exports: [
    ...components,
    ...pipes
  ],
  providers: [
    ...services
  ]
})

export class CoreModule {


  /**
   * 构造函数
   * @param {LoggerService} logger
   * @param {CoreModule} [parentModule]
   * @memberof CoreModule
   */
  constructor(
    private logger: LoggerService,
    @Optional() @SkipSelf() parentModule?: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }

    this.logger.info('core', 'Initialize core module.');
  }
}
