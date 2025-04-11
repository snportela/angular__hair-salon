import { CustomerData } from './customerData';
import { EmployeeData } from './employeeData';

export interface ScheduleData {
  scheduleId: string;
  startAt: string;
  endAt: string;
  customer: CustomerData;
  employee: EmployeeData;
}
