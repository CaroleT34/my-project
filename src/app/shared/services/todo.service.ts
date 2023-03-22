import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [
    new Todo('Faire la vaisselle'),
    new Todo('Faire le ménage'),
    new Todo('Faire les courses'),
    new Todo('Travailler les cours'),
  ];

  constructor() { 
    setTimeout(() => {
      this.todos.push(new Todo("Démarrer le programme"))
    }, 2000);
  }

  public getTodosCopy(): Todo[] {
    return [...this.todos];
  }
  
}
