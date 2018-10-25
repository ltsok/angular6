import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SharedModule } from '@shared';

import { HttpService } from './service/index';

import { HeaderComponent } from './layout/index';
import { FooterComponent } from './layout/index';
import { SidebarComponent } from './layout/index';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,//jsonp跨域
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ],
  exports:[
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ],
  providers: [HttpService]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
