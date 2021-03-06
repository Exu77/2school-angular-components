import { cloneArray } from '../state/utils';
import { TodoItem } from '../common';
import { Component, Inject, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {
    private todos: TodoItem[];
    private orig: TodoItem[];

    @ViewChild('description') private descriptionInput: ElementRef;

    constructor(private http: Http, private snackBar: MdSnackBar) {

    }

    public ngOnInit() {
        this.http.get('assets/mock-data/todos.json')
            .map((result) => result.json())
            .subscribe((result) => {
                this.orig = result;
                this.todos = cloneArray(result);
            });
    }

    public ngOnDestroy() {

    }

    public onAdd(newItemDescription: string) {
        const newItem = { description: newItemDescription, checked: false, lastModified: new Date(), id: 0 };
        this.descriptionInput.nativeElement.value = '';
        this.snackBar.open(`Item with description "${newItemDescription} added`, null, { duration: 1500 });
        this.todos.push(newItem);
        this.snackBar.open('add item', null, { duration: 1500 });

    }

    public onReset(): void {
        this.todos = cloneArray(this.orig);
        this.snackBar.open('reset todos', null, { duration: 1500 });
    }

    public get itemsOpen(): TodoItem[] {
        return this.filterCheckedBy(false);
    }

    public get itemsDone(): TodoItem[] {
        return this.filterCheckedBy(true);
    }

    public onChecked(item: TodoItem) {
       console.log('clicked', item)
        item.checked = !item.checked;
        item.lastModified = new Date();
        this.snackBar.open('checked / unchecked item', null, { duration: 1500 });
    }

    private filterCheckedBy(checked: boolean): TodoItem[] {
        if (this.todos) {
            return this.todos.filter((item) => item.checked === checked);
        }

        return undefined;
    }
}
