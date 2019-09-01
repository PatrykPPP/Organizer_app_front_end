import { Component, OnInit, Input } from '@angular/core';
import {TaskDataService } from 'src/app/services/data/task/task-data.service';
import { Task } from 'src/app/shared/models/task/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
