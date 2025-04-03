import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTimepickerModule } from '@angular/material/timepicker';

interface Food {
  value: string;
  viewValue: string;
}

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
  ],
  templateUrl: './schedule-edit.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './schedule-edit.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleEditComponent {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  selected = model<Date | null>(null);
}
