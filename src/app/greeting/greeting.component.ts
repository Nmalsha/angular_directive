import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css',
})
export class GreetingComponent {
  title = 'Greeting';
  isAdmin = true;
  buttons = ['View', 'Edit'];

  toggleAdminStatus() {
    this.isAdmin = !this.isAdmin;
  }
  getAdminButtonText(): string {
    return this.isAdmin ? 'Set to False' : 'Set to True';
  }
}
