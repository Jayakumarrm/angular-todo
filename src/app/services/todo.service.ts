import { environment } from './../../environments/environment';
import { TODO } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    baseUrl = `http://localhost:1337/api/todo`;

    constructor(
        private http:       HttpClient
    ) { }
       
    getList(): Observable<any> {
        console.log('this.baseUrl', this.baseUrl);
        return this.http.put<TODO[]>('', '')
    }
       
    addNewTodo(title): Observable<TODO> {

        const todo = {
      title: "Volkswagen Tiguan",
      description: "This is a dummy text",
      isCompleted: false,
    };
    
        console.log('this.baseUrl', this.baseUrl);
        return this.http.get<TODO>('')
    }
       
    updateTodo(updatedTask): Observable<TODO> {
        const url = `${this.baseUrl}/updatedTask.id`;
        // console.log('updateTodo', updatedTask);
        return this.http.post<TODO>('', '')
    }
         
    deleteTodo(id) {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete('')
    }
}
