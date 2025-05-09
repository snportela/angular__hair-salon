import { Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { ScheduleEditComponent } from './pages/schedule-edit/schedule-edit.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeEditComponent } from './pages/employee-edit/employee-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: SchedulesComponent,
  },
  {
    path: 'edit-schedule',
    component: ScheduleEditComponent,
  },
  {
    path: 'edit-schedule/:id',
    component: ScheduleEditComponent,
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
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'edit-employee',
    component: EmployeeEditComponent,
  },
  {
    path: 'edit-employee/:id',
    component: EmployeeEditComponent,
  },
];
