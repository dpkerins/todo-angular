import { Component, OnInit } from '@angular/core';
import {TODOS} from '../todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = TODOS;

  constructor() { }

  ngOnInit() {
  }

  deleteTodo(item) {
    const itemIdx = this.todos.findIndex((todo) => todo.id === item.id);
    if (itemIdx > -1) {
      this.todos.splice(itemIdx, 1);
    }
  }

  createUniqueId() {
    const idArray = this.todos.map((todo) => todo.id);
    return (Math.max.apply(null, idArray) + 1);
  }

  createNewTodo(item) {
    if (item !== "") {
      this.todos.push({
        id: this.createUniqueId(),
        name: item
      })
    }
  }

}
