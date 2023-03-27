import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { OneComponent } from './components/one/one.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    LogoComponent,
    FooterComponent,
    ListComponent,
    OneComponent,
    TodoFormComponent,
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
