import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/shared/models/task/task';
declare var $: any;

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Output() emitAddTask = new EventEmitter<Task>();

  isAddError = false;

  constructor(
    public task: Task
  ) { }

  ngOnInit() {
  }

  addTask() {
    this.emitAddTask.emit(this.task);
  }

  closeModal() {
    $('#task-add-form').modal('hide');
    this.isAddError = false;
    this.task.title = '';
    this.task.localDateTime = new Date();
    this.task.description = '';
  }

  showErrorMsg() {
    this.isAddError = true;
  }
}
