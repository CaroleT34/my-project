import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: Todo[] = [
    new Todo('Faire la vaisselle'),
    new Todo('Faire le ménage'),
    new Todo('Faire les courses'),
    new Todo('Travailler les cours'),
  ];

  //Programmation réactive == un observable
  //MAJ de la vue sans manipuler directement l'objet
  public todos$ = new BehaviorSubject([
    new Todo('Faire la vaisselle'),
    new Todo('Faire le ménage'),
    new Todo('Faire les courses'),
    new Todo('Travailler les cours'),
  ]);

  get todos() {
    return [ ...this._todos ];
  }

  constructor() {
    setTimeout(() => {
      this.todos$.next([
        ...this.todos$.value,               //valeurs déjà contenues
        new Todo("Démarrer le programme")   //nouvelle valeur
      ]);
    }, 2000);

    setTimeout(() => {
      this.todos$.next([]);
    }, 3000);

    // //Abonnement 
    // const sub = this.todos$.subscribe(
    //   (todosReceived) => {
    //     console.log(todosReceived)
    //     this._todos = todosReceived
    //   });

    // //Désabonnement
    // setTimeout(() => {
    //   sub.unsubscribe();
    // }, 5000);
  }
}