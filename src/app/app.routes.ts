import { Routes } from '@angular/router';
import { About } from './about/about';
import { Code1 } from './code1/code1';
import { Home } from './home/home';
import { Pos } from './pos/pos';

export const routes: Routes = [
    {path: '', redirectTo: 'pos', pathMatch: 'full'},
    {path: 'pos', component: Pos},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'code1', component: Code1},
];
