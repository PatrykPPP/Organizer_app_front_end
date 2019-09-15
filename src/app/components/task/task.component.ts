import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskDataService } from 'src/app/services/data/task/task-data.service';
import { Task } from 'src/app/shared/models/task/task';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @ViewChild(TaskAddComponent, { static: false })
  private taskAddComponent: TaskAddComponent;

  @ViewChild(TaskListComponent, { static: false })
  private taskListComponent: TaskListComponent;

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
        this.taskListComponent.hideMsgNoCompletedTasks();
      },
      error => {
        this.tasks = null;
        this.taskListComponent.showMsgNoCompletedTasks();
      }
    );
  }

  addTask(task: Task) {
    this.taskService.createTask(task).subscribe(
      response => {
        this.taskAddComponent.closeModal();
        this.findAllTasks();
      },
      error => {
        this.taskAddComponent.showErrorMsg();
      }
    );
  }

  setTaskCompleted(id: number) {
    this.taskService.setTaskCompleted(id).then(
      (value: Observable<any>) => {
        value.subscribe(
          response => {
          },
          error => {
          }
        );
      }
    );
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(
      response => {
        this.findAllTasks();
      },
      error => {
      }
    );
  }

}
