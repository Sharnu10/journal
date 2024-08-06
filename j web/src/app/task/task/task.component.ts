import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  addNew = false;
  cardInfo = [
    {
      id: 1,
      headerText: '2 min',
      priority: 'high',
      title: 'fast work',
      category: ['2 mins'],
      description: 'short work!',
    },
    {
      id: 2,
      headerText: 'timed 2 min',
      priority: 'medium',
      title: 'Timing',
      category: ['timed'],
      description: 'short work can be done in 2 min!',
    },
  ];
}
