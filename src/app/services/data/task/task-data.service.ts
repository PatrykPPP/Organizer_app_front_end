import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/shared/models/task/task';
import { ORGANIZER_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private http: HttpClient
  ) { }

  findAllTasks() {
    return this.http.get<Task[]>(`${ORGANIZER_API_URL}/tasks`);
  }

  findByCompleted(isCompleted: boolean) {
    return this.http.get<Task[]>(`${ORGANIZER_API_URL}/tasks?isCompleted=${isCompleted}&sort=localDateTime`);
  }

  findTaskById(id: number) {
    return this.http.get<Task>(`${ORGANIZER_API_URL}/tasks/${id}`);
  }

  createTask(task: Task) {
    return this.http.post(`${ORGANIZER_API_URL}/tasks`, task);
  }

  setTaskCompleted(taskId: number) {

    class TaskUpdate {
      isCompleted: boolean;
      constructor() { }
    }

    const task = new TaskUpdate();
    task.isCompleted = true;

    return this.http.patch(`${ORGANIZER_API_URL}/tasks/${taskId}`, task);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${ORGANIZER_API_URL}/tasks/${taskId}`);
  }
}
