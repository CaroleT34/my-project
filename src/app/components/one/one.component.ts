import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  @Input() data='';
  @Input() myVar='';

  constructor() {
    setTimeout(() => {
      this.data = 'Nouvelle valeur';
      this.myVar = 'Coucou';
    }, 3000);
  }
}
