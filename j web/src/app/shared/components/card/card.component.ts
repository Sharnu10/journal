import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

import { ListItemComponent } from '../list-item/list-item.component';
import { FormComponent } from '../../../task/form/form.component';
import { ITask } from '../../model/task.model';
import { InputTaskComponent } from '../input-task/input-task.component';
import { TaskApiService } from '../../service/task.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, InputTaskComponent, ListItemComponent, FormComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() headerText: string = '';
  @Input() height: string = '2rem';
  @Input() title: string = '';
  @Input() width: string = '19rem';
  @Input() cardData!: any;
  addNew = false;
  tasksSignal = signal<ITask[]>([]);

  constructor(private taskApiService: TaskApiService) {}

  add(taskData: ITask) {
    this.tasksSignal.update((tasks) => [...tasks, taskData]);
    this.taskApiService.addNewTask(taskData).subscribe();
    this.addNew = false;
  }

  getPriorityColor() {
    return `priority-${this.cardData.priority}`;
  }
}
