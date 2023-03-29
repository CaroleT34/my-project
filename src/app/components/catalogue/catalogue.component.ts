import { Component } from '@angular/core';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { CatalogueService } from 'src/app/shared/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  movies$ = this._catalogueService.movies$;
  selected!: Catalogue;

  constructor(
    private _catalogueService: CatalogueService
  ) {}

  selectMovie(selected: Catalogue) {
    this.selected = selected;
  }

}
