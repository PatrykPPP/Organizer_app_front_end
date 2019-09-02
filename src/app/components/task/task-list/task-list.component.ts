import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/shared/models/task/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];

  @Output() emitSetTaskCompleted = new EventEmitter<number>();
  @Output() emitDeleteTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setTaskCompleted(id: number) {
    this.emitSetTaskCompleted.emit(id);
  }

  deleteTask(id: number) {
    this.emitDeleteTask.emit(id);
  }

}
