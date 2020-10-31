import { Injectable } from '@angular/core';
import {Todo} from "src/app/types/todo/todo"
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todoArray:Todo[] = [];
  dataName:string="todos";

  constructor(private storage:Storage) {
    this.getData(this.dataName).then((todos)=>{
      if(todos){
        this.todoArray=todos;
      }
    });

   }
  getData(name:string){
    return this.storage.get(name);
  }
  getTodos(){
    this.getData(this.dataName).then((todos)=>{
      if(todos){
        this.todoArray = todos;
      }
    });
    return this.todoArray;
  }
  setData(name:string, data:Todo[]){
    this.storage.set(name, data);
  }
  addTodo(todoObject:Todo) {
    if (todoObject !== null) {
      this.todoArray.push(todoObject);
      console.log(this.todoArray);
      this.setData(this.dataName,this.todoArray)
      return this.todoArray;
    } 
    else {
      return false;
    }
  }
  deleteItem(todo) {
    for (let i = 0; i < this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log("delete item");
        this.setData(this.dataName, this.todoArray);
        return this.todoArray;
        
      }
    }
    
  }
  
}
