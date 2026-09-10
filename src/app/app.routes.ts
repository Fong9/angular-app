import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Homework2 } from './homework2/homework2';
import { Menu } from './menu/menu';
import { PageNotFound } from './page-not-found/page-not-found';
import { Homework } from './homework/homework';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'menu', component: Menu},
    {path: 'home', component: Home},
    {path: 'contact', component:Contact},
    {path: 'about', component:About},
    {path: 'homework', component:Homework},
    {path: 'homework2', component:Homework2},
    {path: 'page-not-found', component: PageNotFound},
    {path: '**', redirectTo: 'page-not-found'},
];
