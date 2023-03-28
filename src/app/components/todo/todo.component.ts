import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent {
  todos$ = this._todoService.todos$;

  constructor(
    private _todoService: TodoService
  ) {}

  toggleStateTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this._todoService['update'](todo);
  }
}