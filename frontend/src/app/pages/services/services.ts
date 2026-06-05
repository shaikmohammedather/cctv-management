import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [FormsModule, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  isFormOpen = false;

  selectedService = '';

  isLoading = false;

  successMessage = '';

  errorMessage = '';

  formData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    service: '',
  };

  constructor(private http: HttpClient) {}

  openForm(service: string) {
    this.isFormOpen = true;

    this.selectedService = service;

    this.formData.service = service;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  submitForm() {
    this.successMessage = '';

    this.errorMessage = '';

    if (!this.formData.name || !this.formData.phone || !this.formData.address) {
      this.errorMessage = 'Please fill all fields';

      return;
    }

    this.isLoading = true;

    this.http
      .post('https://cctv-management-backend.onrender.com/api/submit', this.formData)
      .subscribe({
        next: (response) => {
          alert('sent request to the owner');
          this.successMessage = 'Service request submitted successfully';

          this.isLoading = false;

          this.resetForm();

          this.isFormOpen = false;
        },

        error: (error) => {
          console.log(error);

          this.errorMessage = 'Failed to submit request';

          this.isLoading = false;
        },
      });
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      service: '',
    };
  }
}
