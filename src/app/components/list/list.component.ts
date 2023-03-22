import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  todos: Todo[] = this._todoService.todos;
  constructor(private _todoService : TodoService) {}
  //type any quand c'est un objet
  changeDone (todo :any) {
    todo.done = !todo.done;
  }

}
