import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {

  inputfield! :string;
  todos: string[]  = [];

  constructor() {
    this.getArrayFromLocalStorage()
  }

getInputValue() {
  this.todos.push(this.inputfield);
  console.log(this.todos);
  this.setArrayToLocalStorage();
  this.inputfield = '';
}

setArrayToLocalStorage() {
  localStorage.setItem("array", JSON.stringify(this.todos));
}

getArrayFromLocalStorage() {
  const storedArray = localStorage.getItem("array");
  if (storedArray) {
    this.todos = JSON.parse(storedArray);
    console.log(this.todos);
  } else {
    this.todos = [];
  }
}

deleteItem(index:number) {
  this.todos.splice(index, 1);
  this.setArrayToLocalStorage();
}



}
