import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceService, Employee } from '../../services/attendance.service';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.html'
})
export class AddEmployeeComponent {
  emp: Employee = { name:'', email:'', department:'', position:'' };
  message = '';
  constructor(private svc: AttendanceService) {}
  submit() {
    this.svc.addEmployee(this.emp).subscribe(() => {
      this.message = '✅ Employee added successfully!';
      this.emp = { name:'', email:'', department:'', position:'' };
    });
  }
}
