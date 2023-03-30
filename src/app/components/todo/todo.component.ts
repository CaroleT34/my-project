import { Component, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() title: string;
 
}
