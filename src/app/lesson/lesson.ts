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
}