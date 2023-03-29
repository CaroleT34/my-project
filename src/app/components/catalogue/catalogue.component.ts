import { Component } from '@angular/core';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { CatalogueService } from 'src/app/shared/services/catalogue.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  movies$ = this._catalogueService.movies$;
  selected!: Catalogue;
  searchTerm = '';

  constructor(
    private _catalogueService: CatalogueService
  ) {}

  selectMovie(selected: Catalogue) {
    this.selected = selected;
  }

  bookmark(movie: Catalogue) {
    movie.favoris = !movie.favoris;
    if (movie) this._catalogueService.update(movie);
    
  }

  filterCountries(searchTerm: string) {
    this.selected.title = searchTerm.trim().toLocaleLowerCase();
    const filterValue = searchTerm;
    this.selected.title = filterValue.trim().toLowerCase();
  }

}