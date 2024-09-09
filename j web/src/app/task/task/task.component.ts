import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../../shared/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  addNew = false;
  cardInfo: any;

  constructor(private taskApiService: TaskApiService) {}

  ngOnInit(): void {
    this.taskApiService.getTasks().subscribe({
      next: (response) => {
        this.cardInfo = response.data;
      },
      error: (err) => {
        alert('api call failed: ' + err.message);
      },
    });
  }
}
