import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';

import { ROUTER_CONFIG } from './app.routes';
import { InMemoryDataService } from './mock/mock-heroes';

import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(ROUTER_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
