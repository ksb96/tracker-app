import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;
}
