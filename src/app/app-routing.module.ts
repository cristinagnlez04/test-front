import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './core/components/app-home/app-home.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
];



export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });