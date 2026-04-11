import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, Sidebar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;

  toggleMenu() {
    console.log(this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
