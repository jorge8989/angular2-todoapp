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

  removeTodo(id: string): void {
    this.todosService.delete(id).then(()=> {
      this.todos = this.todos.filter(todo => todo._id !== id);
    });
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
