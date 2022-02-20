import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.delete.emit(this.todo);
  }


}
