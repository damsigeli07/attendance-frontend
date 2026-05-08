import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  id?: string;
  name: string;
  email: string;
  department: string;
  position: string;
}

export interface Attendance {
  id?: string;
  employeeId: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class AttendanceService {
  private base = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> { return this.http.get<Employee[]>(`${this.base}/employees`); }
  addEmployee(e: Employee): Observable<Employee> { return this.http.post<Employee>(`${this.base}/employees`, e); }
  deleteEmployee(id: string): Observable<void> { return this.http.delete<void>(`${this.base}/employees/${id}`); }

  getAttendance(): Observable<Attendance[]> { return this.http.get<Attendance[]>(`${this.base}/attendance`); }
  getByEmployee(id: string): Observable<Attendance[]> { return this.http.get<Attendance[]>(`${this.base}/attendance/employee/${id}`); }
  markAttendance(a: Attendance): Observable<Attendance> { return this.http.post<Attendance>(`${this.base}/attendance`, a); }
}
