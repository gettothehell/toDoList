import { Component, OnInit } from '@angular/core';
import {ToDoService} from "../core/services/to-do.service";
import {ToDoItem} from "../core/models/to-do-item.model";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  private toDoList: ToDoItem[];

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.toDoList = this.toDoService.getToDoItems();
  }

  private markIsCompleted(id){
    console.log(id);
    this.toDoService.markIsCompleted(id);
  }

}
