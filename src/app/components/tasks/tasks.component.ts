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
  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
}
  deleteTask(task: Task){
    //subscribe -> then, which filters it from the UI
    this.taskService.deleteTask(task).subscribe(()=>(this.tasks = this.tasks.filter((t)=> t.id !== task.id)));
  }
}
