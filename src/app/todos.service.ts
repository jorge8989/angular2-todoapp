import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todos/todo';

@Injectable()
export class TodosService {
  private todosUrl = 'http://localhost:3010/api/todos';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.todosUrl)
      .toPromise()
      .then(response => response.json().data as Todo[])
      .catch(this.handleError);
  }

  create(name: string): Promise<Todo> {
    return this.http
      .post(this.todosUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message || error);
  }

}
