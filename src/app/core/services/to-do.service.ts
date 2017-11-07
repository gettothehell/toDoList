import { Injectable } from '@angular/core';
import {TodoStorageService} from "./todo-storage.service";

@Injectable()
export class ToDoService {

  constructor(private todoStorageService: TodoStorageService) { }

  public getToDoItems(){
    return this.todoStorageService.getToDoItems();
  };

  public saveItem(item){
    this.todoStorageService.addItem(item);
  }

  public markIsCompleted(id) {
    this.todoStorageService.updateMark(id);
  }
}
