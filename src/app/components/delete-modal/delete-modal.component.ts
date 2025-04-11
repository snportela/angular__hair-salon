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

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }) {}

  router: Router = new Router();

  ngOnInit() {
    console.log(this.router.url);
  }

  deleteItem() {
    if (this.router.url == '/customers') {
      this.customerService.deleteCustomer(this.data.id).subscribe({
        error: (err) => console.log(err),
      });
    }

    if (this.router.url == '/employees') {
      this.employeeService.deleteEmployee(this.data.id).subscribe({
        error: (err) => console.log(err),
      });
    }
  }
}
