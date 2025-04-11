import { Component, inject } from '@angular/core';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';
import { ScheduleData } from '../../models/scheduleData';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-schedules',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFabButton,
    RouterLink,
  ],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.sass',
})
export class SchedulesComponent {
  displayedColumns: string[] = [
    'customer',
    'start-at',
    'end-at',
    'employee',
    'edit',
  ];
  scheduleService: ScheduleService = inject(ScheduleService);
  schedules: ScheduleData[] = [];

  ngOnInit() {
    this.scheduleService.getSchedules().subscribe({
      next: (res) => (this.schedules = res),
      error: (err) => console.log(err),
    });
  }
}
