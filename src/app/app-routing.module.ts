import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'presentation',
    component: PresentationComponent,
    // children: [
    //   { path: '', component: TeamComponent },
    //   { path: 'history', component: HistoryComponent },
    // ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
