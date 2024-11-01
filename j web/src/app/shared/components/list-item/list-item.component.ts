import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TooltipDirective } from '../../directive/tooltip/tooltip.directive';
import { ITask } from '../../model/task.model';

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
    const todayDate =  new Date();
    const createdDate = task.createdDate;
    const differenceIn = this.dateDifference(todayDate, createdDate);

   

    return differenceIn.days <= 0 ? 'border-right-low' : 'border-right-high';
    
  }

  dateDifference(date1: Date, date2: Date) {
    // Get the absolute difference in milliseconds
    const differenceInMs = Math.abs(date2.getTime() - date1.getTime());
  
    // Calculate days
    const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    
    // Calculate hours
    const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Calculate minutes
    const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
    
    // Calculate seconds
    const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }
}
