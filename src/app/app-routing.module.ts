import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ToDoListComponent} from "app/to-do-list/to-do-list.component";


const appRoutes: Routes = [
  { path: '', component: ToDoListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
