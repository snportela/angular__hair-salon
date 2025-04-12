import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  model,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { RouterLink } from '@angular/router';
import { CustomerData } from '../../models/customerData';
import { CustomerService } from '../../services/customer.service';
import { EmployeeData } from '../../models/employeeData';
import { EmployeeService } from '../../services/employee.service';
import { SentScheduleData } from '../../models/sentScheduleData';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import moment from 'moment';
import { ScheduleService } from '../../services/schedule.service';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
    timeInput: 'HH:mm',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
    timeInput: 'HH:mm',
    timeOptionLabel: 'HH:mm',
  },
};

@Component({
  selector: 'app-schedule-edit',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './schedule-edit.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
  styleUrl: './schedule-edit.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleEditComponent {
  customers: CustomerData[] = [];
  customerService: CustomerService = inject(CustomerService);

  employees: EmployeeData[] = [];
  employeeService: EmployeeService = inject(EmployeeService);

  scheduleService: ScheduleService = inject(ScheduleService);

  editScheduleForm = new FormGroup({
    customer: new FormControl({
      customerId: '',
      name: '',
      email: '',
      phone: '',
    }),
    employee: new FormControl({
      employeeId: '',
      name: '',
      email: '',
      phone: '',
      role: '',
    }),
    startAt: new FormControl(''),
    endAt: new FormControl(''),
    date: new FormControl(''),
  });

  selected = model<Date | null>(null);

  @Input() id = '';

  ngOnInit() {
    this.customerService.getCustomers().subscribe({
      next: (res) => (this.customers = res),
      error: (err) => console.log(err),
    });

    this.employeeService.getEmployees().subscribe({
      next: (res) => (this.employees = res),
      error: (err) => console.log(err),
    });
  }

  submitSchedule() {
    const date = moment(this.selected()).format('YYYY-MM-DD');
    const startTime = moment(this.editScheduleForm.value.startAt).format(
      'hh:mm:ss'
    );
    const endTime = moment(this.editScheduleForm.value.endAt).format(
      'hh:mm:ss'
    );

    const startAt = date + 'T' + startTime;
    const endAt = date + 'T' + endTime;

    const data: SentScheduleData = {
      customer: this.editScheduleForm.value.customer ?? {
        customerId: '',
        name: '',
        email: '',
        phone: '',
      },
      employee: this.editScheduleForm.value.employee ?? {
        employeeId: '',
        name: '',
        email: '',
        phone: '',
        role: '',
      },
      startAt: startAt,
      endAt: endAt,
    };

    if (!this.id) {
      this.scheduleService.createSchedule(data).subscribe({
        error: (err) => console.log(err),
      });
      console.log(data);
    }

    console.log('aaaa');
  }
}
