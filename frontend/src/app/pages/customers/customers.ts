import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  imports: [FormsModule, CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  customer: any = {};
  customers: any[] = [];

  showForm = false;
  editMode = false;

  apiUrl = 'https://cctv-management-backend.onrender.com/api/customer';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.customers = data;
    });
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
        this.getCustomers(); // Reload customer list
        this.resetForm(); // Clear form
        this.showForm = false; // Hide form
        this.editMode = false;
        this.isSaving = false;
      },
      error: (err) => {
        console.error('Save failed:', err);
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
