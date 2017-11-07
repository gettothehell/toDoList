import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoStorageService} from "./services/todo-storage.service";
import {ToDoService} from "./services/to-do.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    TodoStorageService,
    ToDoService
  ],
  declarations: []
})
export class CoreModule { }
