import { cloneArray } from '../../../state/utils';
import { TodoItem } from '../../../common';
import {
  Component, Inject, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef,
  Input, Output, EventEmitter
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'todo-list',
  styleUrls: ['./todo-list.component.scss'],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit, OnDestroy {
  @Input()
  public todoList: TodoItem[];

  @Input()
  public title: string;

  @Input()
  public showReset: boolean = false;

  @Output()
  checkedTodo: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @Output()
  resetDone: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  public ngOnInit() {
    console.log('init the shit')
  }

  public ngOnDestroy() {}

  public onChecked(item: TodoItem) {
    this.checkedTodo.emit(item);
  }

  public onReset() {
    this.resetDone.emit();
  }


}
