import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { ScheduleEditComponent } from './pages/schedule-edit/schedule-edit.component';

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
    path: 'edit-customer',
    component: CustomerEditComponent,
  },
  {
    path: 'edit-customer/:id',
    component: CustomerEditComponent,
  },
  {
    path: 'schedule',
    component: SchedulesComponent,
  },
  {
    path: 'edit-schedule',
    component: ScheduleEditComponent,
  },
  {
    path: 'edit-customer/:id',
    component: CustomerEditComponent,
  },
];
