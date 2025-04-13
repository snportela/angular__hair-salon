import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-delete-modal',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteModalComponent {
  customerService: CustomerService = inject(CustomerService);
  employeeService: EmployeeService = inject(EmployeeService);
  scheduleService: ScheduleService = inject(ScheduleService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }) {}

  router: Router = new Router();

  deleteItem() {
    if (this.router.url == '/customers') {
      this.customerService.deleteCustomer(this.data.id).subscribe({
        error: (err) => console.log(err),
      });

      this.router.navigateByUrl('/customers');
    }

    if (this.router.url == '/employees') {
      this.employeeService.deleteEmployee(this.data.id).subscribe({
        error: (err) => console.log(err),
      });

      this.router.navigateByUrl('/employees');
    }

    if (this.router.url == '/') {
      this.scheduleService.deleteSchedule(this.data.id).subscribe({
        error: (err) => console.log(err),
      });
      this.router.navigateByUrl('/');
    }
  }
}
