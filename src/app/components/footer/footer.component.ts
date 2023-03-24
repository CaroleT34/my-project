import { Component } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  todos$ = this._todoService.todos$;

  constructor(private _todoService: TodoService) {}
  
}
