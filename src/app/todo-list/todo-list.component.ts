import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[]; // Define the todos property

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos(); // Initialize todos with the list from the service
    console.log(todoService)
  }
 
}
