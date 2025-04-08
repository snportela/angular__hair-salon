import { Component, inject } from '@angular/core';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { CustomerData } from '../../models/customerData';

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

  ngOnInit() {
    this.customerService.getCustomers().subscribe({
      next: (res) => {
        this.customers = res;
      },
      error: (err) => console.log(err),
    });
  }
}
