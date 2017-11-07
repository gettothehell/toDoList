import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {CoreModule} from "./core/core.module";
import { AddToDoItemComponent } from './add-to-do-item/add-to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    AddToDoItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
