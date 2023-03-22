import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit, OnDestroy{
  todos: Todo[] = [];
  
  private _subscription!: Subscription;

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this._subscription = this._todoService.todos$.subscribe(
      todosReceived => this.todos = todosReceived
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
  
}
