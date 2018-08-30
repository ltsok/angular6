import { Routes } from '@angular/router';

export const ROUTER_CONFIG: Routes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    { path: 'heroes', loadChildren: './components/heroes#HeroesModule' }
];