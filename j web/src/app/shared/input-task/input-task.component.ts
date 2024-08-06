import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.scss',
})
export class InputTaskComponent {
  @Output() taskDataEvent = new EventEmitter<string>();

  taskData: string = '';

  add() {
    if (this.taskData) {
      this.taskDataEvent.emit(this.taskData);
      this.taskData = '';
    }
  }
  clear() {
    this.taskData = '';
  }
}
