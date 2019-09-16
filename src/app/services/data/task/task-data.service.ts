import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/shared/models/task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private http: HttpClient
  ) { }

  findAllTasks() {
    return this.http.get<Task[]>(`http://localhost:8080/api/tasks`);
  }

  findByCompleted(isCompleted: boolean) {
    return this.http.get<Task[]>(`http://localhost:8080/api/tasks?isCompleted=${isCompleted}&sort=localDateTime`);
  }

  findTaskById(id: number) {
    return this.http.get<Task>(`http://localhost:8080/api/tasks/${id}`);
  }

  createTask(task: Task) {
    return this.http.post(`http://localhost:8080/api/tasks`, task);
  }

  setTaskCompleted(taskId: number) {

    class TaskUpdate {
      isCompleted: boolean;
      constructor() { }
    }

    const task = new TaskUpdate();
    task.isCompleted = true;

    return this.http.patch(`http://localhost:8080/api/tasks/${taskId}`, task);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`http://localhost:8080/api/tasks/${taskId}`);
  }
}
