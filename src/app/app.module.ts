import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TodosService],
  bootstrap: [TodosComponent]
})
export class AppModule { }
