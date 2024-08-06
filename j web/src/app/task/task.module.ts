import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';
import { CardComponent } from '../shared/card/card.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, TaskRoutingModule, CardComponent],
  exports: [],
})
export class TaskModule {}
