import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {TodoDataService} from "src/app/services/todo-data.service"
import {Todo} from "src/app/types/todo/todo"
@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  private todoForm: FormGroup;
  todoArray:any= [];
  constructor(private formBuilder: FormBuilder, private model:TodoDataService) {
    this.todoForm = this.formBuilder.group({
      todo: ["", Validators.required],
      done: false
    });
    this.model.getData("todos").then((todos)=>{
      if(todos){
        this.todoArray = todos;
      }
    })
  }

  addTodo(){
    this.todoArray =this.model.addTodo(this.todoForm.value);
  }
  deleteItem(todo){
    this.todoArray=this.model.deleteItem(todo);
  }
  ngOnInit() {
  }

}
