import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Input() todo!: Todo|null;
  
  constructor(
    private _todoService: TodoService,
    private _route: ActivatedRoute,
  ) {
    console.log(
      _route.snapshot.params
    );
  }

  deleteTodo(id?: string) {
    this._todoService.delete(id);
    this.todo = null;
  }
}
