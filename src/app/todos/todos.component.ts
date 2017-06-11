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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.todosService.create(name)
      .then(todo => {
        this.todos.push(todo);
      });
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
