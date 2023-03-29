import { Component, OnInit, ViewChild } from '@angular/core';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { CatalogueService } from 'src/app/shared/services/catalogue.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  movies$ = this._catalogueService.movies$;
  selected!: Catalogue;
  searchTerm = '';
  private _baseUrl = environment.urlApi + '/movies';
  movies: Catalogue[] = [];
  allMovies: Catalogue[] = [];
  
  selectMovie(selected: Catalogue) {
    this.selected = selected;
  }

  constructor(
    private _catalogueService: CatalogueService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get<Catalogue[]>(this._baseUrl)
      .subscribe((data: Catalogue[]) => {
        this.movies = data;
        this.allMovies = this.movies;
      });
  }

  search(value: string): void {
    this.movies = this.allMovies.filter((val) =>
    {if (val.title) {
      val.title.toLowerCase().includes(value)
    }});
  }

  bookmark(movie: Catalogue) {
    movie.favoris = !movie.favoris;
    if (movie) this._catalogueService.update(movie);
  }

}