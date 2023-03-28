import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  constructor(private _todoService: TodoService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const todo = new Todo();
      todo.text = form.value.text;
      todo.done = !!form.value.done;
      this._todoService.create(todo);
      form.reset();
    }
  }
}