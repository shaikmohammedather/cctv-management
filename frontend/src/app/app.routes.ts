import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Services } from './pages/services/services';
import { Customers } from './pages/customers/customers';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'services', component: Services },
  { path: 'customers', component: Customers },
];
