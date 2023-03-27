import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
      this._todoService.create(form.value);
      //form.reset();
    }
  }
}