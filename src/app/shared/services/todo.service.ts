import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _baseUrl = environment.urlApi + '/todos';
  private _options = '?_sort=id&_order=desc';
  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private _http: HttpClient) {
    this.findAll();
  }

  public findAll() {
    this._http
      .get<Todo[]>(this._baseUrl + this._options)
      .subscribe(todosFromApi => {
        this.todos$.next(todosFromApi);
      });
  }

  public create(todo: Todo) {
    this._http
      .post<Todo>(this._baseUrl, todo)
      .subscribe(() => this.findAll());
  }

  public update(todo: Todo) {
    this._http
      .put<Todo>(`${this._baseUrl}/${todo.id}`, todo)
      .subscribe(() => this.findAll());
  }

  public delete(id: string) {
    this._http
      .delete<Todo>(`${this._baseUrl}/${id}`)
      .subscribe(() => this.findAll());
  }

}