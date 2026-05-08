import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list';
import { AddEmployeeComponent } from './components/add-employee/add-employee';
import { MarkAttendanceComponent } from './components/mark-attendance/mark-attendance';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'mark-attendance', component: MarkAttendanceComponent },
  { path: 'report', component: AttendanceReportComponent }
];
