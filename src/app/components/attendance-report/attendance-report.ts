import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceService, Employee, Attendance } from '../../services/attendance.service';

@Component({
  selector: 'app-attendance-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance-report.html'
})
export class AttendanceReportComponent implements OnInit {
  employees: Employee[] = [];
  records: Attendance[] = [];
  selectedId = '';
  constructor(private svc: AttendanceService) {}
  ngOnInit() {
    this.svc.getEmployees().subscribe(d => this.employees = d);
    this.svc.getAttendance().subscribe(d => this.records = d);
  }
  filter() {
    if (this.selectedId) {
      this.svc.getByEmployee(this.selectedId).subscribe(d => this.records = d);
    } else {
      this.svc.getAttendance().subscribe(d => this.records = d);
    }
  }
  getName(id: string) { return this.employees.find(e => e.id === id)?.name || id; }
}
