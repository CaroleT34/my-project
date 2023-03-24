import { Component } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  todos$ = this._todoService.todos$;

  constructor(private _todoService: TodoService) {}

  
  //type any quand c'est un objet
  changeDone (todo :any) {
    todo.done = !todo.done;
  }

}