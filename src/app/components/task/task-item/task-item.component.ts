import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/shared/models/task/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Input() index: number;

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
