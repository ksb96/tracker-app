import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // deleteTask(_t3: Task) {
  // throw new Error('Method not implemented.');
  // }
  tasks: Task[] = [];
  // deleteTask: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //get
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  //delete
  deleteTask(task: Task) {
    //subscribe -> then, which filters it from the UI
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }
  //put
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    // console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }
  //post
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task: Task) => this.tasks.push(task));
    // console.log(task);
  }
}
