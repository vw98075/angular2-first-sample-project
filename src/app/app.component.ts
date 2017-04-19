import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/">Home</a>
      <li><a routerLink="/about">About</a>
    </ul>
    <hr/>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent  {  }

import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {UserComponent} from './components/user.component'
import {AboutComponent} from './components/about.component'

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about ',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);