import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/services/data/task/task-data.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;

  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
