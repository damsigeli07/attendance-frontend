import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceService, Employee, Attendance } from '../../services/attendance.service';

@Component({
  selector: 'app-mark-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mark-attendance.html'
})
export class MarkAttendanceComponent implements OnInit {
  employees: Employee[] = [];
  record: Attendance = { employeeId:'', date:'', checkIn:'', checkOut:'', status:'PRESENT' };
  message = '';
  constructor(private svc: AttendanceService) {}
  ngOnInit() { this.svc.getEmployees().subscribe(d => this.employees = d); }
  submit() {
    this.svc.markAttendance(this.record).subscribe(() => {
      this.message = '✅ Attendance marked!';
      this.record = { employeeId:'', date:'', checkIn:'', checkOut:'', status:'PRESENT' };
    });
  }
}
