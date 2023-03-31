import { Component, Input } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() id_user: string;

  todos$ = this._todoService.todos$;
  selected!: Todo;
  todos : Todo[] = [];

  constructor(
    private _todoService: TodoService
  ) {}

  //Filter by user and done = false
  getTodosByUserAndTaskToDo(id_user: string): Observable<Todo[]> {
    if (id_user === "") {
      return of([]); // Using of() from rxjs to create an observable that emits an empty array
    } else {
      const userFilterById: Todo[] = [];
    this.todos$.value.forEach(todo => {
      if (todo.id_user == id_user && todo.done == false) {
        userFilterById.push(todo);
      }
    });
      return of(userFilterById);
    }
  }

   //Filter by user and done = true
   getTodosByUserAndTaskDone(id_user: string): Observable<Todo[]> {
    if (id_user === "") {
      return of([]); // Using of() from rxjs to create an observable that emits an empty array
    } else {
      const userFilterById: Todo[] = [];
    this.todos$.value.forEach(todo => {
      if (todo.id_user == id_user && todo.done == true) {
        userFilterById.push(todo);
      }
    });
      return of(userFilterById);
    }
  }

  toggleStateTodo(todo: Todo) {
    todo.done = !todo.done;
    this._todoService.update(todo);
  }

  deleteTodo(id?: string) {
    this._todoService.delete(id);
  }
 
}
