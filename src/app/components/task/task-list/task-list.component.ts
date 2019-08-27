import { Component, OnInit } from '@angular/core';
import { Task, TaskDataService } from 'src/app/services/data/task/task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(
    private todoService: TaskDataService
  ) { }

  ngOnInit() {
    this.refreshTodosList();
  }

  refreshTodosList() {
    this.todoService.findAllTasks().subscribe(
      response => {
        this.tasks = response;
        console.log(this.tasks);
      },
      error => {
        console.log(error);
      }
    );
  }

}
