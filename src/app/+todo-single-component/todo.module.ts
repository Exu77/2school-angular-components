import { MdButtonModule, MdInputModule, MdSnackBarModule, MdCardModule, MdCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { NgModule } from '@angular/core';
import { todoRoutesModule } from './todo.routes';
import {TodoListComponent} from './component/todo-list/todo-list.component';

console.log('`Todo` bundle loaded asynchronously');

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MdButtonModule, MdInputModule, MdSnackBarModule,
        MdCardModule, MdCheckboxModule, todoRoutesModule],
    declarations: [TodoComponent, TodoListComponent],
})
export class TodoSingleComponentModule {

}
