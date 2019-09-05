import { TODO } from './../../models/todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    title = 'My Todo App';
    resetInput = '';
    todoService;
    todos = [
    {
      "title": "coffee",
      "description": "todo description",
      "isCompleted": true,
      "createdAt": "2018-06-14T14:21:10.909Z",
      "updatedAt": "2018-06-14T14:21:10.909Z",
      "id": 22
    }
  ];
    constructor(private todoService : TodoService
    ) { }

    ngOnInit() {
    }
      
    getTodos() {
        this.todoService.getList();
    }
    addNewTodo(title: string) {
        console.log(title,'title');
        if (!title) { return; }
        const isCompleted = false;
        console.log('addNewTodo', title);
        this.resetInput = '';
        console.log(title,'title');
        this.todoService.addNewTodo( {title, isCompleted} as TODO );
    }
    deleteTodo(id) {
        this.todoService.deleteTodo(id);
    }
}
