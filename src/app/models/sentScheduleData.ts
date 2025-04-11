import { CustomerData } from './customerData';
import { EmployeeData } from './employeeData';

export interface SentScheduleData {
  startAt: string;
  endAt: string;
  customer: CustomerData;
  employee: EmployeeData;
}
