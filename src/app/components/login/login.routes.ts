import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from "./register/register.component";


export const ROUTER_CONFIG: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
]