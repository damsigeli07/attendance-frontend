import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.html'
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8081/api/employees').subscribe({
      next: (data) => {
        console.log('Employees received:', data);
        this.employees = data;
      },
      error: (err) => console.error('Error:', err)
    });
  }

  delete(id: string) {
    this.http.delete(`http://localhost:8081/api/employees/${id}`)
      .subscribe(() => this.ngOnInit());
  }
}
