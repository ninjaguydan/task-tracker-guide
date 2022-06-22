import { Component, OnInit, Input } from '@angular/core';
import {TaskModel} from "../../TaskModel";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!:TaskModel
  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

}
