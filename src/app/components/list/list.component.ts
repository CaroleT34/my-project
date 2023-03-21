import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  todos = [
    {text : "Arroser les plantes", done: false }, 
    {text : "Passer l'aspirateur", done: true }, 
    {text : "Faire une lessive", done: false }, 
  ]
  
  //type any quand c'est un objet
  changeDone (todo :any) {
    todo.done = !todo.done;
  }

}
