import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SentEmployeeData } from '../../models/sentEmployeeData';
import { MatSelectModule } from '@angular/material/select';
import { Role } from '../../models/rolesData';

@Component({
  selector: 'app-employee-edit',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.sass',
})
export class EmployeeEditComponent {
  employeeService: EmployeeService = inject(EmployeeService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = new Router();
  id: string | any = this.route.snapshot.paramMap.get('id');

  editEmployeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    role: new FormControl(''),
  });

  roles: Role[] = [
    { value: 'HAIRDRESSER', viewValue: 'Hairdresser' },
    { value: 'MAKEUP_ARTIST', viewValue: 'Makeup Artist' },
    { value: 'NAIL_TECHNICIAN', viewValue: 'Nail Technician' },
    { value: 'BARBER', viewValue: 'Barber' },
  ];

  ngOnInit() {
    if (this.id) {
      this.employeeService.getEmployeeById(this.id).subscribe({
        next: (res) => {
          this.editEmployeeForm.controls.name.setValue(res.name);
          this.editEmployeeForm.controls.email.setValue(res.email);
          this.editEmployeeForm.controls.phone.setValue(res.phone);
          this.editEmployeeForm.controls.role.setValue(res.role);
        },
      });
    }
  }

  submitEmployee() {
    const data: SentEmployeeData = {
      name: this.editEmployeeForm.value.name ?? '',
      email: this.editEmployeeForm.value.email ?? '',
      phone: this.editEmployeeForm.value.phone ?? '',
      role: this.editEmployeeForm.value.role ?? '',
    };

    if (!this.id) {
      this.employeeService.createEmployee(data).subscribe({
        error: (err) => console.log(err),
      });
    } else {
      this.employeeService.updateEmployee(this.id, data).subscribe({
        error: (err) => console.log(err),
      });
    }

    this.router.navigate(['/employees']);
  }
}
