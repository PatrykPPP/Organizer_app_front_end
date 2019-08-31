import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Weather {

  public tempInC: number;
  public weatherIcon: string;

  constructor(
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class Task {

  public id: number;
  public title: string;
  public description: string;
  public localDateTime: Date;

  constructor(
    public weather: Weather) { }
}

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
    return this.http.get<Task[]>(`http://localhost:8080/api/tasks?isCompleted=${isCompleted}`);
  }

  findTaskById(id: number) {
    return this.http.get<Task>(`http://localhost:8080/api/tasks/${id}`);
  }

  createTask(task: Task) {
    return this.http.post(`http://localhost:8080/api/tasks`, task);
  }
}
