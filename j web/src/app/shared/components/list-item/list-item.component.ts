import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import moment from 'moment';

import { ITask } from '../../model/task.model';
import { TooltipDirective } from '../../directive/tooltip/tooltip.directive';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  @Input() tasks: ITask[] = [];

  toggle(task: ITask) {
    console.log('task: ', task);
  }

  getPriorityBorder(task: ITask) {
    return `border-left-${task.priority} ${this.getDateDiff(task)}`;
  }

  getDateDiff(task: ITask) {
    const todayDate = moment();
    const createdDate = task.createdDate;
    const diff = todayDate.diff(createdDate, 'days');

    if (diff < 0) {
      return 'border-right-low';
    } else if (diff > 0) {
      return 'border-right-high';
    }
    return '';
  }
}
