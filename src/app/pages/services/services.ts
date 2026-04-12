import { CommonModule } from '@angular/common';
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

  openForm(service: string) {
    this.isFormOpen = true;
    this.selectedService = service;
  }
  submitForm() {
    console.log('Form submitted');
    this.isFormOpen = false;
  }
}
