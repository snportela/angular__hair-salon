import { Component, inject } from '@angular/core';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { CustomerData } from '../../models/customerData';
import { DeleteModalComponent } from '../../components/delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';

export interface Customer {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-customers',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFabButton,
    RouterLink,
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.sass',
})
export class CustomersComponent {
  customerService: CustomerService = inject(CustomerService);
  displayedColumns: string[] = ['name', 'phone', 'email', 'edit'];
  customers: CustomerData[] = [];
  readonly dialog = inject(MatDialog);

  ngOnInit() {
    this.customerService.getCustomers().subscribe({
      next: (res) => {
        this.customers = res;
      },
      error: (err) => console.log(err),
    });
  }

  openDialog(customerId: string) {
    this.dialog.open(DeleteModalComponent, { data: { id: customerId } });
  }
}
