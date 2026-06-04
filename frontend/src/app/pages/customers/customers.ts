import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  customer: any = {};
  customers: any[] = [];

  showForm = false;
  editMode = false;

  apiUrl = 'http://localhost:3000/api/customer';

  constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   console.log('ngOnInit called');
  //   this.getCustomers();
  // }

  getCustomers() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      // console.log('Customers loaded:', data);
      this.customers = data;
      // console.log(this.customers.length);
    });
  }
  ngOnInit() {
    console.log('ngOnInit called');
    this.getCustomers();
  }
  addCustomer() {
    this.customer = {};
    this.editMode = false;
    this.showForm = true;
  }
  isSaving = false;
  saveCustomer() {
    if (this.isSaving) return;

    this.isSaving = true;

    this.http.post(this.apiUrl, this.customer).subscribe({
      next: () => {
        this.getCustomers();
        this.resetForm();
        this.isSaving = false;
      },
      error: () => {
        this.isSaving = false;
      },
    });
  }

  editCustomer(customer: any) {
    this.customer = { ...customer };
    this.editMode = true;
    this.showForm = true;
  }

  deleteCustomer(id: string) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.getCustomers();
    });
  }

  cancel() {
    this.resetForm();
  }

  resetForm() {
    this.customer = {};
    this.showForm = false;
    this.editMode = false;
  }
}
