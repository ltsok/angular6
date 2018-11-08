import { Routes } from '@angular/router';

export const ROUTER_CONFIG: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
    { path: 'heroes', loadChildren: './components/heroes/heroes.module#HeroesModule' },
];
