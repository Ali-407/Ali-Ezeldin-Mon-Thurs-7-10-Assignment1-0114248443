import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Portfolio } from './components/portfolio/portfolio';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'portfolio',component:Portfolio},
    {path:'**',component:Notfound},


    
];
