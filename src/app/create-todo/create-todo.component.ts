import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  title: string = ''; // Initialize title
  description: string = ''; // Initialize description

  constructor(private todoService: TodoService) {}

  createTodo(): void {
    const newTodo: Todo = {
      id: this.todoService.getTodos().length + 1,
      title: this.title,
      description: this.description,
      completed: false
    };
    this.todoService.addTodo(newTodo);
    this.title = '';
    this.description = '';
    console.log(this.todoService)
  }
}
