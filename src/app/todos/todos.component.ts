import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

import { TodosService } from './../todos.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  title = 'app';
  todos: Todo[];

  constructor(private todosService: TodosService) {}

  getTodos(): void {
    this.todosService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
