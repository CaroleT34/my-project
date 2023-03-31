import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Input() id_user: string;
  errors = "";

  constructor(
    private _todoService: TodoService,
    private _router: Router,
  ) {
    console.log(_router.config);
  }

  onSubmit(form: NgForm) {
    console.log(this.id_user)
    if (form.valid && this.id_user !== undefined) {
      const todo = new Todo();
      todo.text = form.value.text;
      todo.done = !!form.value.done;
      todo.categorie = form.value.categorie;
      todo.id_user = this.id_user;
      this._todoService
        .create(todo)
        .subscribe({
          next: () => {
            form.reset();
          },
          error: () => {
            this.errors = "La création n'a pas pu aboutir";
          },
        });
    }
  }
}
