import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'schedule',
    component: SchedulesComponent,
  },
];
