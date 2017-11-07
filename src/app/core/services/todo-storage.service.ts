import { Injectable } from '@angular/core';
import {ToDoItem} from "../models/to-do-item.model";



@Injectable()
export class TodoStorageService {

  private toDoItems: ToDoItem[];

  constructor() {
    this.toDoItems = [{
      title: 'Title1',
      description: 'description1',
      completed: false,
      id: 1
    },
    {
      title: 'Title2',
      description: 'description2',
      completed: true,
      id: 2
    }];
  }

  public getToDoItems() {
    return this.toDoItems;
  }

  private getNewItemId() {
    return this.toDoItems[this.toDoItems.length-1].id + 1;
  };

  public addItem(item) {
    item.id = this.getNewItemId();
    this.toDoItems.push(item);
  }

  public updateMark(id){
    this.toDoItems.find(
      (item)=>{
        return item.id === id;
      }
    ).completed = true;
  }
}
