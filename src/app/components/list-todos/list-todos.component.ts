import { Todo } from './todoclass';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos =  [
    new Todo(1, 'Nunito', false, new Date()),
    new Todo(2, 'Dosier', false, new Date()),
    new Todo(3, 'Tridente', false, new Date()),
  ];

  todo = {
    id: 1,
    description: 'Numero unito'
  };

  constructor() { }

  ngOnInit() {
  }

}
