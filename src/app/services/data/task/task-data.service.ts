import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Task {

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public localDateTime: Date,
    public weather: Weather
  ) { }
}

export class Weather {

  constructor(
    public tempInC: number,
    public weatherIcon: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private http: HttpClient
  ) { }

  findAllTasks(isCompleted: boolean) {
    return this.http.get<Task[]>(`http://localhost:8080/api/tasks?isCompleted=${isCompleted}`);
  }

  findTask(id: number) {
    return this.http.get<Task>(`http://localhost:8080/api/tasks/${id}`);
  }
}
