import { Routes } from '@angular/router';

export const ROUTER_CONFIG: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch:'full'
    },
    { path: 'heroes', loadChildren: './components/heroes#HeroesModule' },
];