import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';

import { ROUTER_CONFIG } from './app.routes';
import { CoreModule } from './core';

import { InMemoryDataService } from './mock/mock-heroes';

import { AppComponent } from './app.component';

import { HeroesModule } from './components/heroes';
import { LoginModule } from './components/login/login.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(ROUTER_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
