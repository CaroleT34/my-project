import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  todos: Todo[] = this._todoService.todos;
  todosCopyFooter: Todo[];

  constructor(private _todoService: TodoService) {
    this.todosCopyFooter = this._todoService.getTodosCopy();
    this.todosCopyFooter.pop();
  }
  
}
