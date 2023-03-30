import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  selectedUser!: string;

  users : User[] = [
    {id: '1', name: 'Michel'},
    {id: '2', name: 'Manon'}
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      }
    );
  }

  getSelectedUserName() {
    if (this.selectedUser) {
      const user = this.users.find((u) => u.id == this.selectedUser);
      return user ? "Les tâches pour " + user.name + " sont :": '';
    }
    return '';
  }

}
