import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SharedModule } from '@shared';
import { ROUTER_CONFIG } from './login.routes';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
   SharedModule,
   RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class LoginModule { }
