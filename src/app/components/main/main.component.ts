import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';

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

}
