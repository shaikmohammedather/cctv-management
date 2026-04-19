import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  imports: [FormsModule, CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  customer: any = {};

  customers: any[] = [];

  showForm = false;
  editMode = false;
  editIndex = -1;

  addCustomer() {
    this.customer = {};
    this.showForm = true;
    this.editMode = false;
  }

  saveCustomer() {
    if (this.editMode) {
      this.customers[this.editIndex] = { ...this.customer };
    } else {
      this.customers.push({ ...this.customer });
    }
    this.resetForm();
  }

  editCustomer(index: number) {
    this.customer = { ...this.customers[index] };
    this.editIndex = index;
    this.editMode = true;
    this.showForm = true;
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }

  cancel() {
    this.resetForm();
  }

  resetForm() {
    this.customer = {};
    this.showForm = false;
    this.editMode = false;
    this.editIndex = -1;
  }
}
