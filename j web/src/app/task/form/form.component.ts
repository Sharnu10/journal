import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITask } from '../../shared/model/task.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Output() taskDataEvent = new EventEmitter<ITask>();

  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
      priority: '',
      category: '',
      createdDate: '',
    });
  }

  submit() {
    const data = {
      task: this.taskForm.value.task,
      priority: this.taskForm.value.priority || 'low',
      category: this.taskForm.value.category || '',
      createdDate: this.taskForm.value.createdDate || new Date(),
    };

    this.taskDataEvent.emit(data);
  }
}
