import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = environment.urlApi + '/todos';
  public todos$ = new BehaviorSubject<Todo[]>([]);

  
  constructor(private http: HttpClient) {
    this.findAll();
  }

  public findAll() {
    this.http
      .get<Todo[]>(this.apiUrl)
      .subscribe(todosFromApi => {
        this.todos$.next(todosFromApi);
      });
  }

  public create(todo: Todo) {
    return this.http
      .post<Todo>(this.apiUrl, todo)
      .pipe(
        tap(() => setTimeout(() => {
          this.findAll();
        }, 500))
      );
  }

  public update(todo: Todo) {
    this.http
      .put<Todo>(`${this.apiUrl}/${todo.id}`, todo)
      .subscribe(() => this.findAll());
  }

  public delete(id?: string) {
    if (id) {
      this.http
        .delete<Todo>(`${this.apiUrl}/${id}`)
        .subscribe(() => this.findAll());
    }
  }
}
