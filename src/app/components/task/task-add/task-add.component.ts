import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/shared/models/task/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Output() emitAddTask = new EventEmitter<Task>();

  constructor(
    public task: Task
  ) { }

  ngOnInit() {
  }

  addTask() {
    this.emitAddTask.emit(this.task);
  }
}
