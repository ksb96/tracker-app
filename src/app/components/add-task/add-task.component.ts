import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  ngOnInit(): void {}

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  //methods
  onSubmit() {
    if(!this.text){
      alert('add text');
      return;
    }
    //submit (this) object to server through service
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    //event emit
    this.onAddTask.emit(newTask);

    //clear the inputs!!
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
