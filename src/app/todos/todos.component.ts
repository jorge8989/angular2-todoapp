import { Component } from '@angular/core';

export class Todo {
  _id: string;
  name: string;
  done: boolean;
}

const TODOS: Todo[] = [
  {_id: 'someid1', name: 'work', done: true},
  {_id: 'someid2', name: 'read', done: true},
  {_id: 'someide3', name: 'lunch', done: false}
];

@Component({
  selector: 'app-root',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  title = 'app';
  todos = TODOS;
}
