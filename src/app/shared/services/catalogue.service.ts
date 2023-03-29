import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { Catalogue } from '../models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  
  private _baseUrl = environment.urlApi + '/movies';
  public movies$ = new BehaviorSubject<Catalogue[]>([]);
  
  constructor(private _http: HttpClient) {
    this.findAll();
  }

  public findAll() {
    this._http
      .get<Catalogue[]>(this._baseUrl)
      .subscribe(catFromApi => {
        this.movies$.next(catFromApi);
      });
  }

  public update(catalogue: Catalogue) {
    this._http
      .put<Catalogue>(`${this._baseUrl}/${catalogue.id}`, catalogue)
      .subscribe(() => this.findAll());
  }
}
