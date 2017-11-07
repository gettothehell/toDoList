import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToDoService} from "../core/services/to-do.service";
import {iterateListLike} from "@angular/core/src/change_detection/change_detection_util";

@Component({
  selector: 'app-add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.css']
})
export class AddToDoItemComponent implements OnInit {

  private toDoItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toDoService: ToDoService) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.toDoItemForm = this.formBuilder.group({
      title: ['',Validators.required],
      description: ['',Validators.required]
    });
  }

  private saveItem(){
    console.log(this.toDoItemForm);
    let item = this.toDoItemForm.value;
    item.completed = false;
    this.toDoService.saveItem(item);
  }


}
