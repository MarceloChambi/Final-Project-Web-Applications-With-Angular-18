import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  {
    path: 'end-point-consumption',
    loadComponent: () => import('./pages/end-point-consumption/end-point-consumption.component').then(m => m.EndPointConsumptionComponent)
  },
  { path: '**', redirectTo: 'home' }
];
