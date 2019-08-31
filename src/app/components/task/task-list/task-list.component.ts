import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskDataService } from 'src/app/services/data/task/task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() { }

}
