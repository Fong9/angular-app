import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson',
  imports: [],
  templateUrl: './lesson.html',
  styleUrl: './lesson.css',
})
export class Lesson {
  myLesson = "Lesson 3"

  qty = 2
  price = 3.5

  total = this.qty * this.price

  _total(discount = 0) {
    let subTotal = this.price * this.qty
    let dis =  this.qty * this.price * discount / 100
    let total = subTotal - dis
    return total;
  }

  person = {
    "id": 1,
    "name": "Fong",
    "age": 20
  }

  arr = ['Apple', 'Banana', 'Orange']

  studentList = [
    {id: 1, name: "Nara", age: 24},
    {id: 2, name: "Dara", age: 46},
    {id: 3, name: "Fong", age: 64},
    {id: 4, name: "Riza", age: 15},
    {id: 5, name: "Kim", age: 3},
  ]
}