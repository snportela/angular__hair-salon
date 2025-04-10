import { Component, inject } from '@angular/core';
import {
  FormsModule,
  FormControl,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerService } from '../../services/customer.service';
import { CustomerData } from '../../models/customerData';
import { SentCustomerData } from '../../models/sentCustomerData';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.sass',
})
export class CustomerEditComponent {
  customerService: CustomerService = inject(CustomerService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = new Router();
  id: string | any = this.route.snapshot.paramMap.get('id');

  editCustomerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  ngOnInit() {
    if (this.id) {
      this.customerService.getCustomerById(this.id).subscribe({
        next: (res) => {
          this.editCustomerForm.controls.name.setValue(res.name);
          this.editCustomerForm.controls.phone.setValue(res.phone);
          this.editCustomerForm.controls.email.setValue(res.email);
        },
        error: (err) => console.log(err),
      });
    }
  }

  submitCustomer() {
    const data: SentCustomerData = {
      name: this.editCustomerForm.value.name ?? '',
      email: this.editCustomerForm.value.email ?? '',
      phone: this.editCustomerForm.value.phone ?? '',
    };

    if (!this.id) {
      this.customerService.createCustomer(data).subscribe({
        error: (err) => console.log(err),
      });
    } else {
      this.customerService.updateCustomer(this.id, data).subscribe({
        error: (err) => console.log(err),
      });
    }

    this.router.navigate(['/customers']);
  }
}
