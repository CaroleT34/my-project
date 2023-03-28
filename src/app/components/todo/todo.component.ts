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
  selected!: Todo;

  constructor(
    private _todoService: TodoService
  ) {}

  selectTodo(selected: Todo) {
    this.selected = selected;
  }

  toggleStateTodo(todo: Todo) {
    todo.done = !todo.done;
    this._todoService.update(todo);
  }

  editTodo(todo: Todo) {
    todo.editable = !todo.editable;
    if (!todo.editable) this._todoService.update(todo);
  }

  deleteTodo(id?: string) {
    this._todoService.delete(id);
  }
}