import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo?: Todo;

  constructor(private todoService: TodoService) {}

  markAsCompleted(todo: Todo): void {
    if (todo) {
      this.todoService.markAsCompleted(todo);
    }
  }

  delete(todo?: Todo): void {
    if (todo) {
      this.todoService.deleteTodo(todo);
    }
  }
}
