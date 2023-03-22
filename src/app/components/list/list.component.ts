import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];

  private _subscription!: Subscription;

  constructor(private _todoService: TodoService) {}
  //type any quand c'est un objet
  changeDone (todo :any) {
    todo.done = !todo.done;
  }

  ngOnInit() {
    this._subscription = this._todoService.todos$.subscribe(
      todosReceived => this.todos = todosReceived
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}