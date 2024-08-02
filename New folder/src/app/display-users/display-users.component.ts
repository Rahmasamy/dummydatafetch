import { Component, Input } from '@angular/core';
import { CardUserComponent } from '../card-user/card-user.component';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [CardUserComponent],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.css',
})
export class DisplayUsersComponent {
  @Input() currentUsers!: any[];
  ngOnInit() {
    this.displayUsers();
  }
  displayUsers() {
    this.currentUsers.forEach((element) => {
      return element;
    });
  }
}
