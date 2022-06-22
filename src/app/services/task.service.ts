import { Injectable } from '@angular/core';
import {TASKS} from "../mock-tasks";
import { Observable, of } from "rxjs";
import {TaskModel} from "../TaskModel";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Observable<TaskModel[]>{
    const tasks = of(TASKS)
    return tasks
  }
}
