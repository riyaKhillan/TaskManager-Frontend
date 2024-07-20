import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  submitted = false;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: [''],
      priority: ['low'],
      status: ['to-do']
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.taskForm.invalid) {
      return;
    }

    const newTask: Task = this.taskForm.value;
    this.taskService.addTask(newTask).subscribe(
      () => {
        this.submitted = false;
        this.taskForm.reset(); // Reset the form after successful submission
        this.successMessage = 'Task added successfully!';
      },
      error => {
        this.errorMessage = 'Error adding task: ' + error.message;
      }
    );
  }

  get f() { return this.taskForm.controls; } // Access form controls for error handling
}
