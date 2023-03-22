import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  todos: Todo[] = [];

  constructor(private _todoService: TodoService) {
    const sub = this._todoService.todos$.subscribe((todosReceived) => {
      this.todos = todosReceived;
    })

    //Désabonnement
    setTimeout(() => {
      sub.unsubscribe();
    }, 10000);
  }
  
}
