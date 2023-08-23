import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[];

  constructor() {
    const storedTodos = localStorage.getItem('todos');

    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    } else {
      this.todos = [];
    }
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveTodosToLocalStorage();
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      this.saveTodosToLocalStorage();
    }
  }

  markAsCompleted(todo: Todo): void {
    todo.completed = true;
    this.saveTodosToLocalStorage();
  }

  private saveTodosToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
