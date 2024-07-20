import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://your-backend-api-url/tasks'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`<span class="math-inline">\{this\.apiUrl\}/</span>{task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }
}
