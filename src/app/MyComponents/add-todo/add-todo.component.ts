import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  date: string = new Date().toString();  
   @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() {
    this.date = new Date().toString();
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      description: this.desc,
      date: this.date,
      active: true,
    }
    this.todoAdd.emit(todo);
  }

}
