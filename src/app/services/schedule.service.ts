import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleData } from '../models/scheduleData';
import { SentScheduleData } from '../models/sentScheduleData';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private url: string = environment.api_url;

  http: HttpClient = inject(HttpClient);

  getSchedules(): Observable<ScheduleData[]> {
    return this.http.get<ScheduleData[]>(this.url + '/schedules');
  }

  getScheduleById(id: string): Observable<ScheduleData> {
    return this.http.get<ScheduleData>(this.url + '/schedules/' + id);
  }

  createSchedule(schedule: SentScheduleData): Observable<ScheduleData> {
    return this.http.post<ScheduleData>(this.url + '/schedules', schedule);
  }

  updateSchedule(
    id: string,
    schedule: SentScheduleData
  ): Observable<ScheduleData> {
    return this.http.put<ScheduleData>(this.url + '/schedules/' + id, schedule);
  }

  deleteSchedule(id: string) {
    return this.http.delete(this.url + '/schedules/' + id);
  }
}
