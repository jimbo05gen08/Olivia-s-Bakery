import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/layout/layout.component'),
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          {
            path: 'home',
            loadComponent: () => import('./modules/home/home.component'),
          },
          {
            path: 'us',
            loadComponent: () => import('./modules/us/us.component'),
          },
          {
            path: 'signin',
            loadComponent: () => import('./modules/signin/signin.component'),
          },
          {
            path: 'register',
            loadComponent: () =>
              import('./modules/signin/register/register.component'),
          },
          {
            path: 'catalogue',
            loadComponent: () =>
              import('./modules/catalogue/catalogue.component'),
          },
          {
            path: 'contact',
            loadComponent: () => import('./modules/contact/contact.component'),
          },
        ],
      },
    ],
  },
];
