import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  todos: Todo[] = [
    new Todo('Faire la vaisselle'),
    new Todo('Faire le ménage'),
    new Todo('Faire les courses'),
    new Todo('Travailler les cours'),
  ];
  //type any quand c'est un objet
  changeDone (todo :any) {
    todo.done = !todo.done;
  }

}
