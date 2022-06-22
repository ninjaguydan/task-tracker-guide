import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {TaskModel} from "../../TaskModel";

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
	tasks: TaskModel[] = []

	constructor(private taskService: TaskService) {
	}

	ngOnInit(): void {
		this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
	}

}
