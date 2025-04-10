import { Component, inject } from '@angular/core';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { DeleteModalComponent } from '../../components/delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeData } from '../../models/employeeData';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFabButton,
    RouterLink,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.sass',
})
export class EmployeesComponent {
  displayedColumns: string[] = ['name', 'phone', 'email', 'role', 'edit'];
  readonly dialog = inject(MatDialog);
  employees: EmployeeData[] = [];
  employeeService: EmployeeService = inject(EmployeeService);

  ngOnInit() {
    this.employeeService.getEmployees().subscribe({
      next: (res) => {
        this.employees = res;
      },
      error: (err) => console.log(err),
    });
  }

  openDialog(employeeId: string) {
    this.dialog.open(DeleteModalComponent, { data: { id: employeeId } });
  }
}
