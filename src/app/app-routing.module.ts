import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo/todo-details/todo-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'presentation',
    component: PresentationComponent,
  },
  { path: 'todos', component: TodoComponent },
  { path: 'todos/:id', component: TodoDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
