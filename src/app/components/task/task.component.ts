import { Component, OnInit } from '@angular/core';
import {TaskDataService } from 'src/app/services/data/task/task-data.service';
import { Task } from 'src/app/shared/models/task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];

  constructor(
    private taskService: TaskDataService
  ) { }

  ngOnInit() {
    this.findAllTasks();
  }

  findAllTasks() {
    this.taskService.findByCompleted(false).subscribe(
      response => {
        this.tasks = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  addTask(task: Task) {
    this.taskService.createTask(task).subscribe(
      response => {
        console.log(response);
        this.findAllTasks();
      },
      error => {
        console.log(error);
      }
    );
  }

}
